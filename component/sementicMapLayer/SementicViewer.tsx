//  LIB
import { useState, useRef, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import {
  Flex,
  Button,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  Text,
  Highlight,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
//  States
import { sementicViewState } from "store/sementic/sementicState";
import { Select } from "../common/Select";

type Props = {};

const SementicViewer = (props: Props) => {
  const [sv, setSv] = useRecoilState(sementicViewState);
  const [toggle, setToggle] = useState<boolean>(true);
  const ref = useRef<any>();

  const onToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(true);
  }, [sv]);

  const Content = () => {
    const { viewId, props } = sv;
    if (viewId === "storeInfo") {
      return (
        <Flex
          p="3rem 3rem"
          minW="400px"
          borderLeft="1px solid #ededed"
          bgColor="primary.main.bg"
          overflow="hidden"
          transition="0.3s"
        ></Flex>
      );
    } else if (viewId === "rentInfo") {
      return (
        <Flex
          p="3rem 3rem"
          minW="400px"
          borderLeft="1px solid #ededed"
          bgColor="primary.main.bg"
          overflow="hidden"
          transition="0.3s"
        ></Flex>
      );
    } else if (viewId === "eval") {
      return <Report />;
    } else {
      return null;
    }
  };

  if (!sv.viewId && !Content()) {
    return null;
  }

  return (
    <Flex
      position="absolute"
      right={toggle ? "0" : -ref.current.clientWidth}
      top="0"
      zIndex="100"
      h="100%"
      transition="0.3s"
      ref={ref}
    >
      <Button
        position="absolute"
        left="-76px"
        top="0"
        borderRadius="0px 0px 0px 5px"
        onClick={onToggle}
      >
        toggle
      </Button>
      <Content />
    </Flex>
  );
};

export default SementicViewer;

const Report = () => {
  const [double, setDouble] = useState<boolean>(false);

  return (
    <Flex
      p="3rem 3rem"
      w="820px"
      borderLeft="1px solid #ededed"
      bgColor="primary.main.bg"
      overflow="hidden"
      transition="0.3s"
      flexDirection="column"
    >
      <Heading mb="2rem" variant="outlet">
        Report
      </Heading>
      <List display="flex" gap="10rem" mb="2rem">
        <ListItem display="flex" gap="3rem">
          <Text textStyle="list.title">영역</Text>
          <Text textStyle="list.text">다각형</Text>
        </ListItem>
        <ListItem display="flex" gap="3rem">
          <Text textStyle="list.title">업종</Text>
          <Text textStyle="list.text">
            대분류{">"}중분류{">"}소분류
          </Text>
        </ListItem>
        <ListItem display="flex" gap="3rem">
          <Text textStyle="list.title" w="-webkit-fill-available">
            비교기준
          </Text>
          <Select
            data={[
              { text: "없음", val: "null" },
              { text: "탑5", val: "true" },
              { text: "하위5", val: "true" },
            ]}
            opBaseTxt={"text"}
            opBaseId={"val"}
            opBaseKey={"val"}
            onChange={(val: any) => {
              val === "null" ? setDouble(false) : setDouble(true);
            }}
          />
        </ListItem>
      </List>
      <Tabs variant="unstyled" w="100%">
        <TabList
          mb="2rem"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
          gridTemplateRows="1fr 1fr"
          gap="0.5rem"
        >
          <Tab
            w="auto"
            gridRow="1 / 3"
            gridColumn="1"
            borderRadius="5px"
            _selected={{ color: "white", bg: "blue.500" }}
          >
            전체요약
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            유동인구
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            주거인구
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            직장인구
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            세대수
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            업종
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            매출
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            소비
          </Tab>
          <Tab
            w="auto"
            borderRadius="5px"
            _selected={{ color: "white", bg: "green.400" }}
          >
            지역정보
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex>
              <ListTmp />
              {double && <ListTmp />}
            </Flex>
          </TabPanel>
          <TabPanel width="100%">
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["2,032", "남성", "40대", "화요일", "14시~18시"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 일 평균 유동인구수는 2,032명 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["454점"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      성별/연령별 유동인구수는 남성, 40대 이며
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem
                  w="100%"
                  textAlign="center"
                  m={"1rem 0"}
                  display="flex"
                  gap="1rem"
                >
                  <Text w="100%" textStyle="list.text">
                    요일/시간대별 유동인구수는 화요일, 14시~18시 입니다.
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide style={{ width: "100%" }}>
                <LineChart />
              </SwiperSlide>
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "성별 연령대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: ["20대", "30대", "40대", "50대", "60대이상"],
                    datasets: [
                      {
                        label: "남자",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "여자",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(75, 192, 192)",
                      },
                    ],
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "요일 시간대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: [
                      "07~10시",
                      "10~12시",
                      "12~14시",
                      "14~18시",
                      "18~21시",
                    ],
                    datasets: [
                      {
                        label: "월요일",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "화요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(85, 192, 192)",
                      },
                      {
                        label: "수요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(25, 192, 152)",
                      },
                      {
                        label: "목요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(95, 192, 162)",
                      },
                      {
                        label: "금요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(115, 192, 172)",
                      },
                      {
                        label: "토요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(135, 192, 182)",
                      },
                      {
                        label: "일요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(155, 132, 192)",
                      },
                    ],
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["2,032", "남성", "40대", "화요일", "14시~18시"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 주거 인구수는 2,032명 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["454점"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      성별/연령별 주거 인구수는 남성, 40대 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide style={{ width: "100%" }}>
                <LineChart />
              </SwiperSlide>
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "성별 연령대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: ["20대", "30대", "40대", "50대", "60대이상"],
                    datasets: [
                      {
                        label: "남자",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "여자",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(75, 192, 192)",
                      },
                    ],
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["2,032", "남성", "40대", "화요일", "14시~18시"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 직장 인구수는 2,032명 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["454점"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      성별/연령별 직장 인구수는 남성, 40대 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide style={{ width: "100%" }}>
                <LineChart />
              </SwiperSlide>
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "성별 연령대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: ["20대", "30대", "40대", "50대", "60대이상"],
                    datasets: [
                      {
                        label: "남자",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "여자",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(75, 192, 192)",
                      },
                    ],
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["2,032", "남성", "40대", "화요일", "14시~18시"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 세대수는 2,032세대 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["아파트- 9,736", "비아파트- 7,832"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      세대수 유형은 아파트- 9,736 세대 / 비아파트- 7,832 세대
                      입니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: false,
                        text: "성별 연령대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: ["part1", "part2", "part3", "part4", "part5"],
                    datasets: [
                      {
                        label: "아파트",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "비아파트",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(75, 192, 192)",
                      },
                    ],
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["2,032", "남성", "40대", "화요일", "14시~18시"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 동종 업종수는 2,032세대 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["3.5", "분식/떡볶이"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      평균 운영 연수는 3.5년 이며 매출 성장 업종은 분식/떡볶이
                      입니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <LineChart />
                {double && <LineChart />}
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["3,032"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 평균 매출은 3,032 만원 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["4,736", "1,736", "2,987"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      상위 20% 매출 - 4,736 만원 , 하위 20% 매출 - 1,736 만원
                      중간값 - 2,987 만원 입니다
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem
                  w="100%"
                  textAlign="center"
                  m={"1rem 0"}
                  display="flex"
                  gap="1rem"
                >
                  <Text w="100%" textStyle="list.text">
                    <Highlight
                      query={["남성", "40대", "화요일", "14시~18시"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      주요 매출 구성은 남성, 40대, 화요일, 14시~18시 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide style={{ width: "100%" }}>
                <LineChart />
                {double && <LineChart />}
              </SwiperSlide>
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "성별 연령대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: ["20대", "30대", "40대", "50대", "60대이상"],
                    datasets: [
                      {
                        label: "남자",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "여자",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(75, 192, 192)",
                      },
                    ],
                  }}
                />
                {double && (
                  <StackBarChart
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "성별 연령대별 추이",
                        },
                        legend: {
                          position: "bottom" as const,
                        },
                      },
                      responsive: true,
                      scales: {
                        x: {
                          stacked: true,
                        },
                        y: {
                          stacked: true,
                        },
                      },
                    }}
                    data={{
                      labels: ["20대", "30대", "40대", "50대", "60대이상"],
                      datasets: [
                        {
                          label: "남자",
                          data: [300, 500, 1000, 500, 300],
                          backgroundColor: "rgb(255, 99, 132)",
                        },
                        {
                          label: "여자",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(75, 192, 192)",
                        },
                      ],
                    }}
                  />
                )}
              </SwiperSlide>
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "요일 시간대별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: [
                      "07~10시",
                      "10~12시",
                      "12~14시",
                      "14~18시",
                      "18~21시",
                    ],
                    datasets: [
                      {
                        label: "월요일",
                        data: [300, 500, 1000, 500, 300],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                      {
                        label: "화요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(85, 192, 192)",
                      },
                      {
                        label: "수요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(25, 192, 152)",
                      },
                      {
                        label: "목요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(95, 192, 162)",
                      },
                      {
                        label: "금요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(115, 192, 172)",
                      },
                      {
                        label: "토요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(135, 192, 182)",
                      },
                      {
                        label: "일요일",
                        data: [1000, 500, 1200, 100, 100],
                        backgroundColor: "rgb(155, 132, 192)",
                      },
                    ],
                  }}
                />
                {double && (
                  <StackBarChart
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "요일 시간대별 추이",
                        },
                        legend: {
                          position: "bottom" as const,
                        },
                      },
                      responsive: true,
                      scales: {
                        x: {
                          stacked: true,
                        },
                        y: {
                          stacked: true,
                        },
                      },
                    }}
                    data={{
                      labels: [
                        "07~10시",
                        "10~12시",
                        "12~14시",
                        "14~18시",
                        "18~21시",
                      ],
                      datasets: [
                        {
                          label: "월요일",
                          data: [300, 500, 1000, 500, 300],
                          backgroundColor: "rgb(255, 99, 132)",
                        },
                        {
                          label: "화요일",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(85, 192, 192)",
                        },
                        {
                          label: "수요일",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(25, 192, 152)",
                        },
                        {
                          label: "목요일",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(95, 192, 162)",
                        },
                        {
                          label: "금요일",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(115, 192, 172)",
                        },
                        {
                          label: "토요일",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(135, 192, 182)",
                        },
                        {
                          label: "일요일",
                          data: [1000, 500, 1200, 100, 100],
                          backgroundColor: "rgb(155, 132, 192)",
                        },
                      ],
                    }}
                  />
                )}
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["13,000"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역의 평균 결제 금액은 13,000 원 이며
                    </Highlight>
                  </Text>
                </ListItem>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["313"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      평균 결제 건수는 313 건 입니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <LineGroupChart />
                {double && <LineGroupChart />}
              </SwiperSlide>
            </Swiper>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              border="1px solid"
              padding="1rem"
              borderRadius="5px"
              mb="3rem"
            >
              <List>
                <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
                  <Text w="100%" textAlign="center" textStyle="list.text">
                    <Highlight
                      query={["(2)", "(23)", "(1)", "(12)"]}
                      styles={{
                        fontWeight: "900",
                        color: "#6363f1",
                      }}
                    >
                      선택 영역내 학교 (2), 직장수 (23), 지하철 (1), 버스정류장
                      (12) 가 있습니다.
                    </Highlight>
                  </Text>
                </ListItem>
              </List>
            </Flex>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <StackBarChart
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "유형별 추이",
                      },
                      legend: {
                        position: "bottom" as const,
                      },
                    },
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
                  }}
                  data={{
                    labels: ["학교", "직장수", "지하철", "버스정류장"],
                    datasets: [
                      {
                        label: "추이량",
                        data: [300, 500, 1000, 500],
                        backgroundColor: "rgb(255, 99, 132)",
                      },
                    ],
                  }}
                />
                {double && (
                  <StackBarChart
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "유형별 추이",
                        },
                        legend: {
                          position: "bottom" as const,
                        },
                      },
                      responsive: true,
                      scales: {
                        x: {
                          stacked: true,
                        },
                        y: {
                          stacked: true,
                        },
                      },
                    }}
                    data={{
                      labels: ["학교", "직장수", "지하철", "버스정류장"],
                      datasets: [
                        {
                          label: "추이량",
                          data: [300, 500, 1000, 500],
                          backgroundColor: "rgb(255, 99, 132)",
                        },
                      ],
                    }}
                  />
                )}
              </SwiperSlide>
            </Swiper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

const ListTmp = () => {
  return (
    <List>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          상권유형
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["34%", "31%", "28%", "3%", "4"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            상업지역 34% (주거지역 31%, 역세권 28%, 오피스가 3%, 그 외 4%)
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          상권점수
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["454점"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            454점 (1,000점 기준)
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          상권등급
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["3"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            3등급 (5등급 기준)
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          유동인구수
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["12,394"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            12,394 명
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          주거인구수
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["56,631"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            56,631 명
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          직장인구수
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["8,328"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            8,328 명
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          세대수
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["28,683", "9,736", "18,947"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            28,683 세대 (아파트 9,736 세대, 비아파트 18,947 세대)
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          동종 업종수
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["7"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            7
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          평균 결제 금액
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["23,823"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            23,823 원
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          월 평균 매출
        </Text>
        <Text w="100%" textStyle="list.text">
          <Highlight
            query={["2,294"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            2,294 만원
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="50%" textStyle="list.title">
          지역정보
        </Text>
        <Text w="100%" textStyle="list.text">
          학교수(2), 직장수(2), 지하철(1), 버스정류장(12)
        </Text>
      </ListItem>
    </List>
  );
};

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "월별추이",
      },
    },
  };
  const labels = [
    "202202",
    "202203",
    "202204",
    "202205",
    "202206",
    "202207",
    "202208",
    "202209",
    "202210",
    "202211",
    "202212",
    "202301",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "유동인구량",
        data: [500, 1000, 3000, 200, 500, 300, 500, 1000, 3000, 200, 500, 300],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Flex flexDirection="column" gap="1rem">
      <Line options={options} data={data} />
    </Flex>
  );
};

const LineGroupChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "월별추이",
      },
    },
  };
  const labels = [
    "202202",
    "202203",
    "202204",
    "202205",
    "202206",
    "202207",
    "202208",
    "202209",
    "202210",
    "202211",
    "202212",
    "202301",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "결제금액",
        data: [500, 300, 500, 1000, 500, 1000, 3000, 200, 3000, 200, 500, 300],
        borderColor: "rgb(95, 99, 132)",
        backgroundColor: "rgba(205, 199, 182, 0.5)",
      },
      {
        label: "결제건수",
        data: [500, 1000, 3000, 200, 500, 300, 500, 1000, 3000, 200, 500, 300],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Flex flexDirection="column" gap="1rem">
      <Line options={options} data={data} />
    </Flex>
  );
};

const StackBarChart = (props: any) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { options, data } = props;

  return (
    <Flex flexDirection="column" gap="1rem">
      <Bar options={options} data={data} />
    </Flex>
  );
};

const SummaryBox = ({
  text,
  keyPoint,
}: {
  text: string[];
  keyPoint: string[];
}) => {
  return (
    <List>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="4rem">
        <Text w="100%" textAlign="center" textStyle="list.text">
          <Highlight
            query={["2,032", "남성", "40대", "화요일", "14시~18시"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            선택 영역의 일 평균 유동인구수는 2,032명 입니다.
          </Highlight>
        </Text>
      </ListItem>
      <ListItem w="100%" m={"1rem 0"} display="flex" gap="1rem">
        <Text w="100%" textAlign="center" textStyle="list.text">
          <Highlight
            query={["454점"]}
            styles={{
              fontWeight: "900",
              color: "#6363f1",
            }}
          >
            성별/연령별 유동인구수는 남성, 40대 이며
          </Highlight>
        </Text>
      </ListItem>
      <ListItem
        w="100%"
        textAlign="center"
        m={"1rem 0"}
        display="flex"
        gap="1rem"
      >
        <Text w="100%" textStyle="list.text">
          요일/시간대별 유동인구수는 화요일, 14시~18시 입니다.
        </Text>
      </ListItem>
    </List>
  );
};
