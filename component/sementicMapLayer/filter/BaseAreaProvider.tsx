import cubejsApi from "api/cubeApi/config";
import { atomArea } from "store/sementic/sementicState";
import React, { createContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

type Props = {};

export const BaseAreaContext = createContext<{
  active: boolean;
  // sido: { name: string; code: string };
  // sigungu: { name: string; code: string };
  sidoList: any[];
  sigunguList: any[];
  dongList: any[];
  activeHandler: any;
  addr: any;
  addrHandler: any;
  sidoHandler: any;
  sigunguHandler: any;
  activeDrawHandler: any;
  activeDraw: boolean;
}>({
  active: true,
  activeDraw: false,
  // sido: {
  //   name: "",
  //   code: "",
  // },
  // sigungu: {
  //   name: "",
  //   code: "",
  // },
  addr: {
    sido: {
      name: "",
      code: "",
    },
    sigungu: {
      name: "",
      code: "",
    },
  },
  sidoList: [],
  sigunguList: [],
  dongList: [],
  activeHandler: () => {},
  activeDrawHandler: () => {},
  addrHandler: () => {},
  sidoHandler: () => {},
  sigunguHandler: () => {},
});

const BaseAreaProvider = ({ children }: any) => {
  const slctArea = useRecoilValue(atomArea);
  const [active, setActive] = useState<boolean>(true);
  const [activeDraw, setActiveDraw] = useState<boolean>(false);
  // const [sido, setSido] = useState<{ name: string; code: string }>({
  //   name: "",
  //   code: "",
  // });
  // const [sigungu, setSigungu] = useState({
  //   name: "",
  //   code: "",
  // });
  const [addr, setAddr] = useState<{
    sido: { name: string; code: string };
    sigungu: { name: string; code: string };
  }>({
    sido: {
      name: "",
      code: "",
    },
    sigungu: {
      name: "",
      code: "",
    },
  });
  const [sidoList, setSidoList] = useState<any[]>([]);
  const [sigunguList, setSigunguList] = useState<any[]>([]);
  const [dongList, setDongList] = useState<any[]>([]);
  const sidoHandler = (val: { name: string; code: string }) => {
    setAddr({
      sido: val,
      sigungu: {
        name: "",
        code: "",
      },
    });
  };

  const sigunguHandler = (val: { name: string; code: string }) => {
    setAddr({
      ...addr,
      sigungu: val,
    });
  };

  const addrHandler = (val: {
    sido: { name: string; code: string };
    sigungu: { name: string; code: string };
  }) => {
    setAddr(val);
  };

  const activeHandler = (bool: boolean) => {
    setActive(bool);
  };

  const activeDrawHandler = (bool: boolean) => {
    setActiveDraw(bool);
  };

  useEffect(() => {
    if (!slctArea.slctAreaName && !slctArea.slctAreaCode) {
      setActive(true);
    } else {
      setActive(false);
    }

    if (sidoList.length === 0) {
      console.log("start cube sido");
      cubejsApi
        .load({
          dimensions: ["AreaSido.code", "AreaSido.name", "AreaSido.polygon"],
        })
        .then((res) => {
          const data = res.rawData().map((si: any) => ({
            code: si["AreaSido.code"],
            name: si["AreaSido.name"],
            polygon: si["AreaSido.polygon"],
          }));
          if (data) {
            setSidoList(data);
          }
        });
    }
  }, []);

  useEffect(() => {
    if (slctArea.slctAreaName && slctArea.slctAreaCode) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [slctArea]);

  useEffect(() => {
    if (addr.sido.code && !addr.sigungu.code) {
      cubejsApi
        .load({
          dimensions: ["AreaGungu.code", "AreaGungu.name", "AreaGungu.polygon"],
          filters: [
            {
              member: "AreaGungu.parent",
              operator: "equals",
              values: [addr.sido.code],
            },
          ],
        })
        .then((res) => {
          const data = res.rawData().map((sigungu: any) => ({
            code: sigungu["AreaGungu.code"],
            name: sigungu["AreaGungu.name"],
            polygon: sigungu["AreaGungu.polygon"],
          }));

          if (data) {
            setSigunguList(data);
            if (dongList.length !== 0) setDongList([]);
          }
        });
    } else if (addr.sido.code && addr.sigungu.code) {
      console.log(addr.sigungu);
      cubejsApi
        .load({
          dimensions: [
            "AreaDong.code",
            "AreaDong.name",
            "AreaDong.polygon",
            "AreaDong.lat",
            "AreaDong.lng",
          ],
          filters: [
            {
              member: "AreaDong.name",
              operator: "contains",
              values: [addr.sigungu.name],
            },
          ],
        })
        .then((res) => {
          const data = res.rawData().map((dong: any) => ({
            code: dong["AreaDong.code"],
            name: dong["AreaDong.name"],
            polygon: dong["AreaDong.polygon"],
            center: [
              Number(dong["AreaDong.lng"]),
              Number(dong["AreaDong.lat"]),
            ],
          }));

          if (data) {
            setDongList(data);
          }
        });
    }
  }, [addr.sido, addr.sigungu]);

  return (
    <BaseAreaContext.Provider
      value={{
        activeDraw: activeDraw,
        active: active,
        addr: addr,
        // sido: sido,
        // sigungu: sigungu,
        sidoList: sidoList,
        sigunguList: sigunguList,
        dongList: dongList,
        activeHandler: activeHandler,
        activeDrawHandler: activeDrawHandler,
        addrHandler: addrHandler,
        sidoHandler: sidoHandler,
        sigunguHandler: sigunguHandler,
      }}
    >
      {children}
    </BaseAreaContext.Provider>
  );
};

export default BaseAreaProvider;
