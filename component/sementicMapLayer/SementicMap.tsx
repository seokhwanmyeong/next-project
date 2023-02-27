//  Lib
import { useEffect, useState, useRef, useContext, useMemo } from "react";
import { CubeContext } from "@cubejs-client/react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { Button, Flex, keyframes } from "@chakra-ui/react";
//  State
import {
  selectorSementicMapState,
  areaSelectActivator,
  atomMapController,
  infoComFloatPop,
  infoComHousehold,
  infoComUpjong,
  infoComSale,
  infoComMyStore,
  infoComMyRent,
  sementicViewState,
  atomArea,
} from "store/sementic/sementicState";
//  Services
import { addrAreaApiHandler, dong } from "services/address/sgisDepthAddr";
//  Util
import { addrHCode } from "util/data/address";
import { dongData } from "util/data/dongData";
import { BaseAreaContext } from "./filter/BaseAreaProvider";

const SementicMap = () => {
  const slctArea = useRecoilValue(atomArea);
  const mapFloatPop = useRecoilValue(infoComFloatPop);
  const mapHousehold = useRecoilValue(infoComHousehold);
  const mapUpjong = useRecoilValue(infoComUpjong);
  const mapSale = useRecoilValue(infoComSale);
  const mapStore = useRecoilValue(infoComMyStore);
  const mapRent = useRecoilValue(infoComMyRent);
  const setSVState = useSetRecoilState(sementicViewState);

  const [originArea, changeOriginArea] = useState();
  const [markerPop, setMarkerPop] = useState<any[]>([]);
  const [markerHouse, setMarkerHouse] = useState<any[]>([]);
  const [markerUpjong, setMarkerUpjong] = useState<any[]>([]);
  const [markerSale, setMarkerSale] = useState<any[]>([]);
  const [markerStore, setMarkerStore] = useState<any[]>([]);
  const [markerRent, setMarkerRent] = useState<any[]>([]);
  // const { cubejsApi } = useContext(CubeContext);
  // const [baseArea, setBaseArea] = useRecoilState(atomArea);
  // const [slctArea, setSlctArea] = useRecoilState(atomTmpSlctArea);
  // const resetController = useResetRecoilState(atomMapController);
  const {
    activeDraw,
    activeDrawHandler,
    active,
    addr,
    sidoList,
    sigunguList,
    dongList,
    sidoHandler,
    sigunguHandler,
  } = useContext(BaseAreaContext);
  const [siPol, setSiPol] = useState<any[]>([]);
  const [sigunguPol, setSigunguPol] = useState<any[]>([]);
  const [dongPol, setDongPol] = useState<any[]>([]);
  const [dongCenter, setDongCenter] = useState<{}>({});

  const { event } = useRecoilValue(atomMapController);
  const mapEventReset = useResetRecoilState(atomMapController);
  const [mapState, setSementicMapState] = useRecoilState(
    selectorSementicMapState
  );
  const setMapControll = useSetRecoilState(areaSelectActivator);
  const mapRef = useRef<any>();
  const markerRef = useRef<any>();
  const [offset, setOffset] = useState({ left: 0, top: 0 });
  const [basePointer, setPointer] = useState<any>({
    pointer: {
      coord: {},
      address: "",
      isCheck: false,
    },
    area: {
      polygon: {},
      isCheck: true,
    },
  });

  const polygonCreator = (
    areaLi: { code: string; name: string; polygon: string }[],
    clickEvent: (area: { code: string; name: string; polygon: any }) => any,
    activeEvent: boolean = true
  ) => {
    return areaLi.map((area) => {
      const polygon = Object.values(JSON.parse(area.polygon)).map(
        (latLng: any) => {
          if (area.code === "28" || area.code === "46") {
            return latLng.map(
              (depth: any) => new naver.maps.LatLng(depth[1], depth[0])
            );
          } else {
            return new naver.maps.LatLng(latLng[1], latLng[0]);
          }
        }
      );
      let color = "red";

      // 인천, 전라남도 예외조건 paths
      const setPolygon = new naver.maps.Polygon({
        map: mapRef.current,
        paths: area.code === "28" || area.code === "46" ? polygon : [polygon],
        fillColor: color,
        fillOpacity: 0.1,
        strokeColor: color,
        strokeWeight: 1,
        strokeOpacity: 0.6,
        clickable: activeEvent,
        zIndex: activeEvent ? 0 : -1,
      });

      if (activeEvent) {
        naver.maps.Event.addListener(setPolygon, "click", (e) => {
          clickEvent({ ...area, polygon: setPolygon });
        });

        naver.maps.Event.addListener(setPolygon, "mouseover", (e) => {
          mapRef.current.setCursor("pointer");
          setPolygon.setOptions("fillOpacity", 0.4);
        });

        naver.maps.Event.addListener(setPolygon, "mouseout", (e) => {
          mapRef.current.setCursor("auto");
          setPolygon.setOptions("fillOpacity", 0.1);
        });
      }

      return setPolygon;
    });
  };

  const MapController = (props: any) => {
    const [drawType, setDrawType] = useState("");
    const [dm, setDm] = useState<any>(null);
    const polygonType = [
      {
        title: "다각형",
        key: "custom",
      },
      {
        title: "포인터범위",
        key: "pointer",
      },
      {
        title: "주소범위",
        key: "addr",
      },
    ];

    const boxAniKetframe = keyframes`
      0% {top: -50px}
      100% {top: 20px}
    `;

    useEffect(() => {
      let drawingManager = new naver.maps.drawing.DrawingManager({
        map: mapRef.current,
        drawingControl: [],
        // controlPointOptions: {
        //   anchorPointOptions: {
        //     radius: 5,
        //     fillColor: "#ff0000",
        //     strokeColor: "#0000ff",
        //     strokeWeight: 2,
        //     center:
        //   },
        //   midPointOptions: {
        //     radius: 4,
        //     fillColor: "#ff0000",
        //     strokeColor: "#0000ff",
        //     strokeWeight: 2,
        //     fillOpacity: 0.5,
        //   },
        // },
        rectangleOptions: {
          fillColor: "#ff0000",
          fillOpacity: 0.5,
          strokeWeight: 3,
          strokeColor: "#ff0000",
        },
        ellipseOptions: {
          fillColor: "#ff25dc",
          fillOpacity: 0.5,
          strokeWeight: 3,
          strokeColor: "#ff25dc",
        },
        polylineOptions: {
          // 화살표 아이콘 계열 옵션은 무시됩니다.
          strokeColor: "#222",
          strokeWeight: 3,
        },
        arrowlineOptions: {
          // startIcon || endIcon 옵션이 없으면 endIcon을 BLOCK_OPEN으로 설정합니다.
          endIconSize: 16,
          strokeWeight: 3,
        },
        polygonOptions: {
          fillColor: "#ffc300",
          fillOpacity: 0.5,
          strokeWeight: 3,
          strokeColor: "#ffc300",
          zIndex: 0,
        },
      });

      drawingManager.addListener(
        naver.maps.drawing.DrawingEvents.ADD,
        function (overlay: any) {
          // console.log(overlay);
          // console.log(overlay.id);
          // console.log(overlay.name);

          const center = getCenterPolygon([overlay]);

          const content = document.createElement("div");

          const startBtn = document.createElement("button");
          startBtn.innerHTML = "영역분석";
          startBtn.onclick = function () {
            console.log("click");
            overlay.setMap(null);
            activeDrawHandler(false);
            setSVState({ viewId: "eval", props: null });
            infowindow.close();
          };
          content.appendChild(startBtn);

          // const removeBtn = document.createElement("button");
          // removeBtn.innerHTML = "취소하기";
          // removeBtn.onclick = function () {
          //   overlay.setMap(null);
          // };
          // content.appendChild(removeBtn);

          const infowindow = new naver.maps.InfoWindow({
            maxWidth: 200,
            position: new naver.maps.LatLng(center[0][1], center[0][0]),
            content: content,
            backgroundColor: "transparent",
            borderColor: "none",
            borderWidth: 0,
            anchorSize: new naver.maps.Size(10, 5),
            anchorSkew: false,
            anchorColor: "#transparent",
          });

          naver.maps.Event.addListener(overlay, "click", (e) => {
            infowindow.open(mapRef.current);
          });
        }
      );
      setDm(drawingManager);
    }, []);

    return (
      <Flex
        position="absolute"
        top="20px"
        left="50%"
        transform="translateX(-50%)"
        p="20px"
        bg="#ffffff"
        border="1px solid #555555"
        borderRadius="10px"
        gap="10px"
        animation={`${boxAniKetframe} 0.3s linear`}
      >
        {polygonType.map((list) => {
          const { title, key } = list;
          return (
            <Button
              key={key}
              isActive={key === drawType}
              onClick={() => {
                setDrawType(key);
                dm.setOptions("drawingMode", 5);
              }}
              bg="#555555"
              fontWeight="bold"
              _hover={{
                backgroundColor: "#000000",
              }}
            >
              {title}
            </Button>
          );
        })}
        <Button
          key={"polygon-reset"}
          onClick={() => {
            setMapControll("");
          }}
          bg="#ff6161"
          fontWeight="bold"
          _hover={{
            backgroundColor: "#ff2121",
          }}
        >
          초기화
        </Button>
        <Button
          key={"polygon-cancle"}
          onClick={() => {
            dm.setMap(null);
            setDm(null);
            setDrawType("");
            activeDrawHandler(false);
          }}
          bg="#ff6161"
          fontWeight="bold"
          _hover={{
            backgroundColor: "#ff2121",
          }}
        >
          취소
        </Button>
      </Flex>
    );
  };

  const Test = () => {
    return (
      <Button
        style={{
          padding: "5px 10px",
          position: "absolute",
          left: `${offset.left}px`,
          top: `${offset.top - 60}px`,
          zIndex: "999",
          color: "#ffffff",
          borderRadius: "5px",
          backgroundColor: "#555555",
        }}
        onClick={() => {
          setMapControll("");
          setSementicMapState(basePointer);
          setOffset({ left: 0, top: 0 });
          setPointer({
            pointer: {
              coord: {},
              address: "",
              isCheck: false,
            },
            area: {
              polygon: {},
              isCheck: true,
            },
          });
        }}
      >
        설정완료
      </Button>
    );
  };

  const mapBasePointHandler = (e: any, baseMap: any) => {
    const point = e.coord;

    if (markerRef.current === undefined) {
      const marker = new naver.maps.Marker({
        position: point,
        map: baseMap,
      });

      markerRef.current = marker;
    } else {
      markerRef.current.setPosition(point);
    }

    const position: { x: number; y: number } = mapRef.current
      .getProjection()
      .fromCoordToOffset(point);

    setOffset({
      left: Math.floor(position.x),
      top: Math.floor(position.y),
    });

    naver.maps.Service.reverseGeocode(
      {
        coords: point,
        orders: [
          naver.maps.Service.OrderType.ADDR,
          naver.maps.Service.OrderType.ROAD_ADDR,
        ].join(","),
      },
      (status, response) => {
        if (status !== naver.maps.Service.Status.OK) {
          return alert("address api error");
        }
        const result = response.v2;
        setPointer({
          ...basePointer,
          pointer: {
            coord: point,
            address: result.address.jibunAddress,
            isCheck: true,
          },
        });
      }
    );
  };

  const mapBasePolygonHandler = (e: any, baseMap: any) => {
    const point = e.coord;
    console.log(point);
  };

  // 폴리곤 센터값 추출 로직
  const getCenterPolygon = (polygons: any[]) => {
    const centers = polygons.map((polygon, idx: number) => {
      const bounds = polygon.getPath();
      const arr = bounds._array;
      const length = arr.length;
      let xcos = 0;
      let ycos = 0;
      let area = 0;

      for (let i = 0, len = length, j = length - 1; i < len; j = i++) {
        let p1 = arr[i];
        let p2 = arr[j];

        let f = p1.y * p2.x - p2.y * p1.x;
        xcos += (p1.x + p2.x) * f;
        ycos += (p1.y + p2.y) * f;
        area += f * 3;
      }

      return [xcos / area, ycos / area];
    });

    return centers;
  };

  // useEffect(() => {
  //   console.log("initialize Map Event");
  //   if (event) {
  //     mapEventReset();
  //   }
  // }, []);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(36.1223291, 126.9101228),
        zoom: 8,
        tileTransition: true,
      });

      return;
    }
  }, [mapRef]);

  // 지역선택 polygon
  useEffect(() => {
    if (siPol.length === 0) {
      console.log("step1");

      mapRef.current.setOptions("minZoom", 8);
      mapRef.current.setZoom(8);
      mapRef.current.setOptions("scrollWheel", false);

      const pol = polygonCreator(sidoList, (sido) => {
        mapRef.current.fitBounds(sido.polygon.getBounds());
        sidoHandler({ code: sido.code, name: sido.name });
      });

      setSiPol(pol);
    } else if (
      siPol.length !== 0 &&
      sidoList.length !== 0 &&
      !addr.sido.code &&
      !addr.sigungu.code
    ) {
      console.log("step2");
      console.log(addr);

      if (sigunguPol.length !== 0) {
        sigunguPol.map((polygon) => polygon.setMap(null));
      }

      if (dongPol.length !== 0) {
        dongPol.map((polygon) => polygon.setMap(null));
      }

      mapRef.current.setOptions("minZoom", 8);
      mapRef.current.setZoom(8);
      mapRef.current.setOptions("scrollWheel", false);

      siPol.map((polygon) => polygon.setMap(mapRef.current));
    } else if (
      addr.sido.code &&
      !addr.sigungu.code &&
      sigunguList.length !== 0
    ) {
      console.log("step3");

      if (sigunguPol.length !== 0) {
        sigunguPol.map((polygon) => polygon.setMap(null));
      }

      if (dongPol.length !== 0) {
        dongPol.map((polygon) => polygon.setMap(null));
      }

      siPol.map((polygon) => polygon.setMap(null));

      let zoom = mapRef.current.getZoom();
      mapRef.current.setOptions("minZoom", 0);
      mapRef.current.setOptions("scrollWheel", false);
      mapRef.current.setZoom(zoom);

      const pol = polygonCreator(sigunguList, (sigungu) => {
        mapRef.current.fitBounds(sigungu.polygon.getBounds());
        sigunguHandler({ code: sigungu.code, name: sigungu.name });
      });

      for (let i = 0; i < sidoList.length; i++) {
        if (sidoList[i].code === addr.sido.code) {
          mapRef.current.fitBounds(siPol[i].getBounds());
          console.log(mapRef.current.fitBounds(siPol[i].getBounds()));
          break;
        }
      }

      setSigunguPol(pol);
    } else if (addr.sido.code && addr.sigungu.code && dongList.length !== 0) {
      console.log("step4");
      sigunguPol.map((polygon) => polygon.setMap(null));

      if (dongPol.length !== 0) {
        dongPol.map((polygon) => polygon.setMap(null));
      }

      mapRef.current.setOptions("minZoom", 0);

      const pol = polygonCreator(dongList, (dong) => {}, false);
      // 센터값 로직
      // const centers = getCenterPolygon(pol);
      const centers: { [key: string]: any } = {};

      dongList.map((el: any) => {
        centers[el.code] = el.center;
      });

      for (let i = 0; i < sidoList.length; i++) {
        if (sigunguList[i].code === addr.sigungu.code) {
          mapRef.current.fitBounds(sigunguPol[i].getBounds());
          break;
        }
      }

      let zoom = mapRef.current.getZoom();
      mapRef.current.setOptions("scrollWheel", true);
      mapRef.current.setOptions("minZoom", zoom);
      mapRef.current.setZoom(zoom);

      setDongCenter(centers);
      setDongPol(pol);
    }
  }, [addr.sido, addr.sigungu, sidoList, sigunguList, dongList]);

  // 마커생성함수
  const markerCreator = (data: any, viewId: string, map?: any) => {
    const markers = data.map((li: any) => {
      const marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(li.lat, li.lng),
      });
      naver.maps.Event.addListener(marker, "click", (e) => {
        console.log(li);
        setSVState({ viewId: viewId, props: li });
      });

      const contentString = [
        "<div style='padding: 5px 10px; border: none; background-color: #ffffff; border-radius: 5px;'>",
        `   <h3 style='font-size: 16px; font-weight: 900; color: #000000'>${li.name}</h3>`,
        "</div>",
      ].join("");

      const infowindow = new naver.maps.InfoWindow({
        maxWidth: 200,
        content: contentString,
        backgroundColor: "transparent",
        borderColor: "none",
        borderWidth: 0,
        anchorSize: new naver.maps.Size(10, 5),
        anchorSkew: true,
        anchorColor: "#ffffff",
      });

      naver.maps.Event.addListener(marker, "mouseover", (e) => {
        infowindow.open(map, marker);
      });

      naver.maps.Event.addListener(marker, "mouseout", (e) => {
        infowindow.close();
      });

      return marker;
    });

    return markers;
  };

  // center 마커생성함수
  const centerMarkerCreator = (
    centers: any,
    data: any,
    map: any,
    title: string,
    trans: [number, number]
  ) => {
    const markerContent = [
      `<div style='padding: 5px 5px; width: 50px; border: none; background-color: #ffffff; border-radius: 5px; transform: translate(${trans[0]}%, ${trans[1]}%'>`,
      `   <h3 style='text-align: center;font-size: 10px; font-weight: 900; color: #000000'>${title}</h3>`,
      "</div>",
    ].join("");

    const markers = Object.entries(data).map((li: any) => {
      if (centers[li[0]] === undefined) {
        console.log(centers);
        console.log(li);
        return;
      }
      const marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(centers[li[0]][0], centers[li[0]][1]),
        icon: {
          content: markerContent,
        },
      });
      const infoContent = [
        `<div style='padding: 5px 10px; border: none; background-color: #ffffff; border-radius: 5px; transform: translate(${
          trans[0] / 2
        }%, ${trans[1] / 2}%)'>`,
        `   <h3 style='font-size: 16px; font-weight: 900; color: #000000'>${JSON.stringify(
          li[1]
        )}</h3>`,
        "</div>",
      ].join("");

      const infowindow = new naver.maps.InfoWindow({
        maxWidth: 200,
        content: infoContent,
        backgroundColor: "transparent",
        borderColor: "none",
        borderWidth: 0,
        anchorSize: new naver.maps.Size(10, 5),
        anchorSkew: false,
        anchorColor: "#transparent",
      });

      naver.maps.Event.addListener(marker, "mouseover", (e) => {
        infowindow.open(map, marker);
      });

      naver.maps.Event.addListener(marker, "mouseout", (e) => {
        // infowindow.close();
        infowindow.close();
      });

      return marker;
    });

    return markers;
  };

  // useEffect(() => {
  //   console.log(markerPop);
  //   markerPop.map((res) => res.setMap(mapRef.current));
  //   console.log(mapFloatPop);
  // }, [markerPop]);

  // 인구 마커
  useEffect(() => {
    if (markerPop.length === 0) {
      if (mapFloatPop.data) {
        setMarkerPop(
          centerMarkerCreator(
            dongCenter,
            mapFloatPop.data,
            mapRef.current,
            "유동인구",
            [55, 55]
          )
        );
      } else {
        return;
      }
    } else {
      if (mapFloatPop.data) {
        if (mapFloatPop.active) {
          console.log(mapFloatPop);
          markerPop.map((marker: any) => marker.setMap(null));
          setMarkerPop(
            centerMarkerCreator(
              dongCenter,
              mapFloatPop.data,
              mapRef.current,
              "유동인구",
              [55, 55]
            )
          );
        } else {
          markerPop.map((marker: any) => marker.setMap(null));
        }
      } else {
        markerPop.map((marker: any) => marker.setMap(null));
        setMarkerPop([]);
      }
    }
  }, [mapFloatPop]);

  // 세대수 마커
  useEffect(() => {
    if (markerHouse.length === 0) {
      if (mapHousehold.data) {
        setMarkerHouse(
          centerMarkerCreator(
            dongCenter,
            mapHousehold.data,
            mapRef.current,
            "세대수",
            [55, -55]
          )
        );
      } else {
        return;
      }
    } else {
      if (mapHousehold.data) {
        if (mapHousehold.active) {
          markerHouse.map((marker: any) => marker.setMap(null));
          setMarkerHouse(
            centerMarkerCreator(
              dongCenter,
              mapHousehold.data,
              mapRef.current,
              "세대수",
              [55, -55]
            )
          );
        } else {
          markerHouse.map((marker: any) => marker.setMap(null));
        }
      } else {
        markerHouse.map((marker: any) => marker.setMap(null));
        setMarkerHouse([]);
      }
    }
  }, [mapHousehold]);

  // 업종 마커
  useEffect(() => {
    if (markerUpjong.length === 0) {
      if (mapUpjong.data) {
        setMarkerUpjong(
          centerMarkerCreator(
            dongCenter,
            mapUpjong.data,
            mapRef.current,
            "업종수",
            [-55, -55]
          )
        );
      } else {
        return;
      }
    } else {
      if (mapUpjong.data) {
        if (mapUpjong.active) {
          markerUpjong.map((marker: any) => marker.setMap(null));
          setMarkerUpjong(
            centerMarkerCreator(
              dongCenter,
              mapUpjong.data,
              mapRef.current,
              "업종수",
              [-55, -55]
            )
          );
        } else {
          markerUpjong.map((marker: any) => marker.setMap(null));
        }
      } else {
        markerUpjong.map((marker: any) => marker.setMap(null));
        setMarkerUpjong([]);
      }
    }
  }, [mapUpjong]);

  // 매출 마커
  useEffect(() => {
    if (markerSale.length === 0) {
      if (mapSale.data) {
        setMarkerSale(
          centerMarkerCreator(
            dongCenter,
            mapSale.data,
            mapRef.current,
            "매출",
            [-55, 55]
          )
        );
      } else {
        return;
      }
    } else {
      if (mapSale.data) {
        if (mapSale.active) {
          markerSale.map((marker: any) => marker.setMap(null));
          setMarkerSale(
            centerMarkerCreator(
              dongCenter,
              mapSale.data,
              mapRef.current,
              "매출",
              [-55, 55]
            )
          );
        } else {
          markerSale.map((marker: any) => marker.setMap(null));
        }
      } else {
        markerSale.map((marker: any) => marker.setMap(null));
        setMarkerSale([]);
      }
    }
  }, [mapSale]);

  // 매장 마커
  useEffect(() => {
    if (markerStore.length === 0) {
      if (mapStore.data.length !== 0) {
        setMarkerStore(
          markerCreator(mapStore.data, "storeInfo", mapRef.current)
        );
      } else {
        return;
      }
    } else {
      if (mapStore.data.length !== 0) {
        if (mapStore.active) {
          markerStore.map((marker: any) => marker.setMap(null));
          setMarkerStore(
            markerCreator(mapStore.data, "storeInfo", mapRef.current)
          );
        } else {
          markerStore.map((marker: any) => marker.setMap(null));
        }
      } else {
        markerStore.map((marker: any) => marker.setMap(null));
        setMarkerStore([]);
      }
    }
  }, [mapStore]);

  // 매물 마커
  useEffect(() => {
    if (markerRent.length === 0) {
      if (mapRent.data.length !== 0) {
        setMarkerRent(markerCreator(mapRent.data, "rentInfo", mapRef.current));
      } else {
        return;
      }
    } else {
      if (mapRent.data.length !== 0) {
        if (mapRent.active) {
          markerRent.map((marker: any) => marker.setMap(null));
          setMarkerRent(
            markerCreator(mapRent.data, "rentInfo", mapRef.current)
          );
        } else {
          markerRent.map((marker: any) => marker.setMap(null));
        }
      } else {
        markerRent.map((marker: any) => marker.setMap(null));
        setMarkerRent([]);
      }
    }
  }, [mapRent]);

  useEffect(() => {
    if (originArea !== slctArea.slctAreaCode) {
      changeOriginArea(slctArea.slctAreaCode);

      if (markerPop.length !== 0)
        markerPop.map((marker) => marker.setMap(null));
      if (markerHouse.length !== 0)
        markerHouse.map((marker) => marker.setMap(null));
      if (markerUpjong.length !== 0)
        markerUpjong.map((marker) => marker.setMap(null));
      if (markerSale.length !== 0)
        markerSale.map((marker) => marker.setMap(null));
      if (markerStore.length !== 0)
        markerStore.map((marker) => marker.setMap(null));
      if (markerRent.length !== 0)
        markerRent.map((marker) => marker.setMap(null));
    } else {
      if (active) {
        if (markerPop.length !== 0)
          markerPop.map((marker) => marker.setVisible(false));
        if (markerHouse.length !== 0)
          markerHouse.map((marker) => marker.setVisible(false));
        if (markerUpjong.length !== 0)
          markerUpjong.map((marker) => marker.setVisible(false));
        if (markerSale.length !== 0)
          markerSale.map((marker) => marker.setVisible(false));
        if (markerStore.length !== 0)
          markerStore.map((marker) => marker.setVisible(false));
        if (markerRent.length !== 0)
          markerRent.map((marker) => marker.setVisible(false));
      } else {
        if (markerPop.length !== 0)
          markerPop.map((marker) => marker.setVisible(true));
        if (markerHouse.length !== 0)
          markerHouse.map((marker) => marker.setVisible(true));
        if (markerUpjong.length !== 0)
          markerUpjong.map((marker) => marker.setVisible(true));
        if (markerSale.length !== 0)
          markerSale.map((marker) => marker.setVisible(true));
        if (markerStore.length !== 0)
          markerStore.map((marker) => marker.setVisible(true));
        if (markerRent.length !== 0)
          markerRent.map((marker) => marker.setVisible(true));
      }
    }
  }, [active, slctArea]);

  const exportData = (data: any) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {event === "activePoint" && <Test />}
        {activeDraw && <MapController />}
      </div>
    </>
  );
};

export default SementicMap;
