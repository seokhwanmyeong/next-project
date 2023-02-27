//  Lib
import { useContext, useEffect, useState } from "react";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  Switch,
  IconButton,
} from "@chakra-ui/react";
import { SpinnerIcon, ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
//  API
import cubejsApi from "api/cubeApi/config";
//  Components
import { FilterChkTagGroup } from "component/common/CheckBox";
import { RadioTagGroup } from "component/common/RadioBox";
import { Input, InputDate } from "component/common/Input";
import { Select, SelectAddr } from "component/common/Select";
//  State
import {
  atomArea,
  infoComFloatPop,
  infoComHousehold,
  infoComUpjong,
  infoComSale,
  infoComMyStore,
  infoComMyRent,
} from "store/sementic/sementicState";
import { BaseAreaContext } from "../filter/BaseAreaProvider";

const FilterInfoCom = (props: any) => {
  const { isDisabled } = props;
  const { slctAreaCode } = useRecoilValue(atomArea);
  const { activeDrawHandler } = useContext(BaseAreaContext);

  return (
    <Accordion variant={"searchEngine"} allowToggle>
      <AccordionItem key={`group-data`} isDisabled={isDisabled}>
        <AccordionButton color="#ffffff">
          데이터 분석
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          backgroundColor="#ededed"
          color="#555555"
          fontSize="0.8rem"
          fontWeight="bold"
          gap="10px"
        >
          <Accordion variant={"searchEngine"} allowToggle>
            <AccordionItem key={`infoCom-floatPop`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                유동인구
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterFloatPop areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-household`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                세대수
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterHousehold areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-upjong`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                업종수
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterUpjong areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-sale`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                매출
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterSale areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-eval`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                영역분석
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <Button
                  w="100%"
                  onClick={() => {
                    activeDrawHandler(true);
                  }}
                >
                  영역그리기
                </Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-brandSet`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                브랜드필터
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterBrandSet areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-brand`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                사업체조회
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterBrand areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-building`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                건물조회
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterBuilding areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem key={`group-erp`} isDisabled={isDisabled}>
        <AccordionButton color="#ffffff">
          ERP
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          backgroundColor="#ededed"
          color="#555555"
          fontSize="0.8rem"
          fontWeight="bold"
          gap="10px"
        >
          <Accordion variant={"searchEngine"} allowToggle>
            <AccordionItem key={`infoCom-store`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                매장조회
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterStore areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-bsns`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                상권조회
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterBsns areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`infoCom-rent`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                매물조회
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                <FilterRent areaCode={slctAreaCode} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem key={`filter-edior`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                생성하기
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              ></AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      {/* {baseList.infoCom.content.map(
        (info: { title: string; cate: string; list: [] }, idx: number) => {
          const { title, cate, list } = info;

          return (
            <AccordionItem key={`infoCom-list-${cate}`} isDisabled={isDisabled}>
              <AccordionButton color="#ffffff">
                {title}
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                backgroundColor="#ededed"
                color="#555555"
                fontSize="0.8rem"
                fontWeight="bold"
                gap="10px"
              >
                {list &&
                  list.map((item: { title: string; key: string }) => {
                    const { title, key } = item;
                    return (
                      <CheckBoxTag
                        isChecked={infocomList.includes(key)}
                        isDisabled={isDisabled}
                        key={key}
                        value={key}
                        title={title}
                        onChange={() => setInfoCom(key)}
                      />
                    );
                  })}
              </AccordionPanel>
            </AccordionItem>
          );
        }
      )} */}
    </Accordion>
  );
};

const SwitchOnOff = (props: {
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { size, onChange } = props;
  const [chk, setChk] = useState<boolean>(false);

  return (
    <Flex position="relative">
      <Text
        position="absolute"
        left={"5px"}
        zIndex={1}
        visibility={chk ? "visible" : "hidden"}
        fontWeight={900}
      >
        on
      </Text>
      <Text
        position="absolute"
        right={"5px"}
        zIndex={1}
        visibility={chk ? "hidden" : "visible"}
        fontWeight={900}
      >
        off
      </Text>
      <Switch
        spacing="5rem"
        size={size}
        onChange={(e) => {
          setChk(e.target.checked);
          onChange(e);
        }}
      />
    </Flex>
  );
};

const InnerText = ({
  text,
  hasUp = false,
  hasDown = false,
}: {
  text: string;
  hasUp?: boolean;
  hasDown?: boolean;
}) => {
  return (
    <Flex alignItems="center">
      <Text>{text}</Text>
      {hasUp && <ChevronUpIcon w="1.4rem" h="1.2rem" />}
      {hasDown && <ChevronDownIcon w="1.4rem" h="1.2rem" />}
    </Flex>
  );
};

const FilterFloatPop = ({ areaCode }: { areaCode: string }) => {
  const [floatPop, setFloatPop] = useRecoilState(infoComFloatPop);
  const resetFloatPop = useResetRecoilState(infoComFloatPop);
  const [filter, setFilter] = useState<any>({
    gender: [],
    age: [],
    popRange: {
      start: "",
      end: "",
    },
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setFloatPop({ ...floatPop, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetFloatPop();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);

    let dimensions = [];
    filter.gender.length !== 0 && dimensions.push(...filter.gender);
    filter.age.length !== 0 && dimensions.push(...filter.age);

    let transFilter: any[] = [];
    (filter.popRange.start || filter.popRange.end) &&
      dimensions.push("Pop.ageT");
    filter.popRange.start &&
      transFilter.push({
        member: "Pop.ageT",
        operator: "gt",
        values: [filter.popRange.start],
      });
    filter.popRange.end &&
      transFilter.push({
        member: "Pop.ageT",
        operator: "lt",
        values: [filter.popRange.end],
      });

    if (!areaCode || (dimensions.length === 0 && transFilter.length === 0))
      return null;

    cubejsApi
      .load({
        dimensions: [...dimensions, "Pop.areaCode"],
        filters: [
          {
            member: "Pop.areaCode",
            operator: "contains",
            values: [areaCode.slice(0, 5)],
          },
          ...transFilter,
        ],
      })
      .then((res) => {
        const result: { [key: string]: any } = {};

        res?.rawData().map((li: any) => {
          result[li["Pop.areaCode"]] = {
            genderM: li["Pop.genderM"],
            genderW: li["Pop.genderW"],
            ageT: li["Pop.ageT"],
            age20th: li["Pop.age20th"],
            age30th: li["Pop.age30th"],
            age40th: li["Pop.age40th"],
            age50th: li["Pop.age50th"],
            age60th: li["Pop.age60th"],
          };
        });
        // console.log(result);
        setFloatPop({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={floatPop.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="35%">
        {/* <Text fontSize="1.6rem">성별</Text> */}
        <FilterChkTagGroup
          chkValue={filter.gender || []}
          chkboxData={[
            { text: "남", value: "Pop.genderM" },
            { text: "여", value: "Pop.genderW" },
          ]}
          onChange={(val) => setFilter({ ...filter, gender: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Flex flexDirection="row" w="90%">
        {/* <Text fontSize="1.6rem">나이</Text> */}
        <FilterChkTagGroup
          chkValue={filter.age || []}
          chkboxData={[
            { text: "20대", value: "Pop.age20th" },
            { text: "30대", value: "Pop.age30th" },
            { text: "40대", value: "Pop.age40th" },
            { text: "50대", value: "Pop.age50th" },
            { text: "60대", value: "Pop.age60th" },
          ]}
          onChange={(val) => setFilter({ ...filter, age: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Input
          type="number"
          onChange={(val: number) => {
            setFilter({
              ...filter,
              popRange: { start: val, end: filter.popRange.end },
            });
          }}
          placeholder="placeHolder"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
          }}
        />
        <Text>~</Text>
        <Input
          type="number"
          onChange={(val: number) => {
            setFilter({
              ...filter,
              popRange: { start: filter.popRange.start, end: val },
            });
          }}
          placeholder="placeHolder"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
          }}
        />
      </Flex>
      <Button
        isDisabled={
          !areaCode ||
          (filter.age.length === 0 &&
            filter.gender.length === 0 &&
            !filter.popRange.start &&
            !filter.popRange.end)
        }
        onClick={searchHander}
      >
        조회
      </Button>
    </Flex>
  );
};

const FilterHousehold = ({ areaCode }: { areaCode: string }) => {
  const [household, setHousehold] = useRecoilState(infoComHousehold);
  const resetHousehold = useResetRecoilState(infoComHousehold);
  const [filter, setFilter] = useState<{ hous: any }>({
    hous: "0",
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setHousehold({ ...household, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetHousehold();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    console.log(areaCode);
    //apiService(filter).then((res) => {})

    cubejsApi
      .load({
        dimensions: [
          "House.areaCode",
          "House.hous",
          "House.apt",
          "House.noe",
          "House.com",
          "House.offtel",
        ],
        filters: [
          {
            member: "House.areaCode",
            operator: "contains",
            values: [areaCode.slice(0, 5)],
          },
          {
            member: "House.hous",
            operator: "gt",
            values: [filter.hous],
          },
        ],
      })
      .then((res) => {
        const result: { [key: string]: any } = {};
        res?.rawData().map((li: any) => {
          result[li["House.areaCode"]] = {
            apt: li["House.apt"],
            com: li["House.com"],
            hous: li["House.hous"],
            noe: li["House.noe"],
            offtel: li["House.offtel"],
          };
          // return {
          //   dongCode: li["House.areaCode"],
          //   apt: li["House.apt"],
          //   com: li["House.com"],
          //   hous: li["House.hous"],
          //   noe: li["House.noe"],
          //   offtel: li["House.offtel"],
          // };
        });
        console.log(result);
        setHousehold({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={household.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon key="test" />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="90%">
        {/* <Text fontSize="1.6rem">나이</Text> */}
        <RadioTagGroup
          radioValue={filter.hous}
          radioData={[
            { text: <InnerText text="1천" hasUp={true} />, value: "1000" },
            { text: <InnerText text="2천" hasUp={true} />, value: "2000" },
            { text: <InnerText text="3천" hasUp={true} />, value: "3000" },
            { text: <InnerText text="4천" hasUp={true} />, value: "4000" },
            { text: <InnerText text="5천" hasUp={true} />, value: "5000" },
            { text: <InnerText text="1만" hasUp={true} />, value: "10000" },
          ]}
          onChange={(val) => setFilter({ hous: val })}
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterUpjong = ({ areaCode }: { areaCode: string }) => {
  const [upjong, setUpjong] = useRecoilState(infoComUpjong);
  const resetUpjong = useResetRecoilState(infoComUpjong);
  const [filter, setFilter] = useState<string>("0");
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setUpjong({ ...upjong, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetUpjong();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    const countFilter: { [key: number | string]: any } = {
      0: [],
      1: [
        {
          member: "Upjong.storeCnt",
          operator: "lt",
          values: ["5"],
        },
      ],
      2: [
        {
          member: "Upjong.storeCnt",
          operator: "gt",
          values: ["6"],
        },
        {
          member: "Upjong.storeCnt",
          operator: "lt",
          values: ["10"],
        },
      ],
      3: [
        {
          member: "Upjong.storeCnt",
          operator: "gt",
          values: ["11"],
        },
        {
          member: "Upjong.storeCnt",
          operator: "lt",
          values: ["15"],
        },
      ],
      4: [
        {
          member: "Upjong.storeCnt",
          operator: "gt",
          values: ["16"],
        },
        {
          member: "Upjong.storeCnt",
          operator: "lt",
          values: ["20"],
        },
      ],
      5: [
        {
          member: "Upjong.storeCnt",
          operator: "gt",
          values: ["20"],
        },
      ],
      6: [
        {
          member: "Upjong.storeCnt",
          operator: "gt",
          values: ["50"],
        },
      ],
    };

    cubejsApi
      .load({
        dimensions: ["Upjong.areaCode", "Upjong.storeCnt"],
        filters: [
          {
            member: "Upjong.areaCode",
            operator: "contains",
            values: [areaCode.slice(0, 5)],
          },
          ...countFilter[filter],
        ],
      })
      .then((res) => {
        const result: { [key: string]: any } = {};

        res?.rawData().map((li: any) => {
          result[li["Upjong.areaCode"]] = {
            storeCnt: li["Upjong.storeCnt"],
          };
          // return {
          //   dongCode: li["House.areaCode"],
          //   apt: li["House.apt"],
          //   com: li["House.com"],
          //   hous: li["House.hous"],
          //   noe: li["House.noe"],
          //   offtel: li["House.offtel"],
          // };
        });
        console.log(result);
        setUpjong({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={upjong.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        {/* <Text fontSize="1.6rem">나이</Text> */}
        <RadioTagGroup
          radioValue={filter}
          radioData={[
            {
              text: <InnerText text="5" hasDown={true} />,
              value: "1",
            },
            { text: <InnerText text="6 ~ 10" />, value: "2" },
            { text: <InnerText text="11 ~ 15" />, value: "3" },
            { text: <InnerText text="16 ~ 20" />, value: "4" },
            { text: <InnerText text="20" hasUp={true} />, value: "5" },
            { text: <InnerText text="50" hasUp={true} />, value: "6" },
          ]}
          onChange={(val) => setFilter(val)}
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterSale = ({ areaCode }: { areaCode: string }) => {
  const [sales, setSales] = useRecoilState(infoComSale);
  const resetSales = useResetRecoilState(infoComSale);
  const [filter, setFilter] = useState<string>("0");
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setSales({ ...sales, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetSales();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})

    cubejsApi
      .load({
        dimensions: [
          "Upjong.areaCode",
          "Upjong.avgSalesAmt",
          "Upjong.salesAmtTop20",
          "Upjong.salesAmtBottom20",
        ],
        filters: [
          {
            member: "Upjong.areaCode",
            operator: "contains",
            values: [areaCode.slice(0, 5)],
          },
          {
            member: "Upjong.avgSalesAmt",
            operator: "gt",
            values: [filter],
          },
        ],
      })
      .then((res) => {
        const result: { [key: string]: any } = {};

        res?.rawData().map((li: any) => {
          result[li["Upjong.areaCode"]] = {
            avg: li["Upjong.avgSalesAmt"],
            top: li["Upjong.salesAmtTop20"],
            bot: li["Upjong.salesAmtBottom20"],
          };
        });
        console.log(result);

        setSales({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={sales.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        {/* <Text fontSize="1.6rem">나이</Text> */}
        <RadioTagGroup
          radioValue={filter}
          radioData={[
            { text: <InnerText text="1000만" hasUp={true} />, value: "1000" },
            { text: <InnerText text="2000만" hasUp={true} />, value: "2000" },
            { text: <InnerText text="4000만" hasUp={true} />, value: "4000" },
            { text: <InnerText text="5000만" hasUp={true} />, value: "5000" },
            { text: <InnerText text="6000만" hasUp={true} />, value: "6000" },
            { text: <InnerText text="1억" hasUp={true} />, value: "10000" },
          ]}
          onChange={(val: string) => setFilter(val)}
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterBrand = ({ areaCode }: { areaCode: string }) => {
  const [filter, setFilter] = useState<any>({
    brand: [],
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    console.log(active);
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          // isChecked={sales.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          사업체목록
        </Text>
        <FilterChkTagGroup
          chkValue={filter.brand || []}
          chkboxData={[
            { text: "스타벅스", value: "star" },
            { text: "이디야", value: "edi" },
            { text: "공차", value: "gong" },
            { text: "탐앤탐스", value: "tom" },
          ]}
          onChange={(val) => setFilter({ ...filter, age: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterBrandSet = ({ areaCode }: { areaCode: string }) => {
  const [filter, setFilter] = useState<any>({
    areaCode: "",
    size: {
      start: "",
      end: "",
    },
    date: {
      start: "",
      end: "",
    },
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    console.log(active);
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})
  };

  return (
    <Flex w="100%" minW="10rem" flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          // isChecked={sales.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          그룹
        </Text>
        <Select
          data={[{ text: "탑매장5", value: "total" }]}
          opBaseTxt="text"
          opBaseId="value"
          opBaseKey="value"
          onChange={() => {}}
        />
      </Flex>
      <Button onClick={searchHander}>적용</Button>
    </Flex>
  );
};

const FilterBuilding = ({ areaCode }: { areaCode: string }) => {
  const [filter, setFilter] = useState<any>({
    areaCode: "",
    size: {
      start: "",
      end: "",
    },
    date: {
      start: "",
      end: "",
    },
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    console.log(active);
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          // isChecked={sales.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          준공기간
        </Text>
        <InputDate type="double" value={filter.date} onChange={() => {}} />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          대장종류
        </Text>
        <Select
          data={[{ text: "전체", value: "total" }]}
          opBaseTxt="text"
          opBaseId="value"
          opBaseKey="value"
          onChange={() => {}}
          value="total"
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          용도
        </Text>
        <Select
          data={[{ text: "전체", value: "total" }]}
          opBaseTxt="text"
          opBaseId="value"
          opBaseKey="value"
          onChange={() => {}}
          value="total"
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          구조
        </Text>
        <Select
          data={[{ text: "전체", value: "total" }]}
          opBaseTxt="text"
          opBaseId="value"
          opBaseKey="value"
          onChange={() => {}}
          value="total"
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text width="10rem" fontSize="1.6rem">
          연면적
        </Text>
        <Input
          type="number"
          onChange={(val: number) => {
            setFilter({
              ...filter,
              size: { start: val, end: filter.size.end },
            });
          }}
          placeholder="placeHolder"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
            w: "auto",
          }}
        />
        <Text>~</Text>
        <Input
          type="number"
          onChange={(val: number) => {
            setFilter({
              ...filter,
              size: { start: filter.size.start, end: val },
            });
          }}
          placeholder="placeHolder"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
            w: "auto",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        <Text width="10rem" fontSize="1.6rem">
          대지위치
        </Text>
        <SelectAddr
          value={filter.areaCode}
          onChange={(val: any) => {
            setFilter({ ...filter, areaCode: val });
          }}
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterStore = ({ areaCode }: { areaCode: string }) => {
  const [store, setStore] = useRecoilState(infoComMyStore);
  const resetStore = useResetRecoilState(infoComMyStore);
  const [filter, setFilter] = useState<{
    name: string;
    rank: any[];
    status: any[];
  }>({
    name: "",
    rank: [],
    status: [],
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setStore({ ...store, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetStore();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})

    let transFilter: any = [
      {
        member: "StoreInfo.areaCode",
        operator: "contains",
        values: [areaCode.slice(0, 5)],
      },
    ];

    filter.name &&
      transFilter.push({
        member: "StoreInfo.storeCode",
        operator: "contains",
        values: [filter.name],
      });

    filter.name &&
      transFilter.push({
        member: "StoreInfo.storeName",
        operator: "contains",
        values: [filter.name],
      });

    filter.rank &&
      transFilter.push({
        member: "StoreInfo.storeRank",
        operator: "contains",
        values: filter.rank,
      });

    filter.rank &&
      transFilter.push({
        member: "StoreInfo.storeStatus",
        operator: "contains",
        values: filter.rank,
      });

    cubejsApi
      .load({
        dimensions: [
          "StoreInfo.id",
          "StoreInfo.storeName",
          "StoreInfo.storeCode",
          "StoreInfo.areaCode",
          "StoreInfo.lat",
          "StoreInfo.lng",
        ],
        filters: transFilter,
      })
      .then((res) => {
        const result = res?.rawData().map((li: any) => {
          return {
            areaCode: li["StoreInfo.areaCode"],
            name: li["StoreInfo.storeName"],
            storeCode: li["StoreInfo.storeCode"],
            id: li["StoreInfo.id"],
            lat: li["StoreInfo.lat"],
            lng: li["StoreInfo.lng"],
          };
        });
        console.log(result);
        setStore({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={store.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex alignItems="center">
        <Text w="5rem" fontSize="1.6rem">
          검색
        </Text>
        <Input
          type="number"
          onChange={(val: string) => {
            setFilter({
              ...filter,
              name: val,
            });
          }}
          placeholder="매장명, 코드검색"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        <Text w="5rem" fontSize="1.6rem">
          타입
        </Text>
        <FilterChkTagGroup
          chkValue={filter.rank}
          chkboxData={[
            { text: "A", value: "rankA" },
            { text: "B", value: "rankB" },
            { text: "C", value: "rankC" },
            { text: "D", value: "rankD" },
            { text: "E", value: "rankE" },
          ]}
          onChange={(val: any) => setFilter({ ...filter, rank: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        <Text w="5rem" fontSize="1.6rem">
          상태
        </Text>
        <FilterChkTagGroup
          chkValue={filter.status}
          chkboxData={[
            { text: "입점", value: "정상" },
            { text: "휴점", value: "휴점" },
            { text: "폐점", value: "폐점" },
            { text: "대기", value: "준비" },
            { text: "기타", value: "기타" },
          ]}
          onChange={(val: any) => setFilter({ ...filter, status: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        <Text w="5rem" fontSize="1.6rem">
          매출
        </Text>
        <Flex flexDirection="column" gap="0.5rem">
          <Flex alignItems="center" gap="0.5rem">
            <Input
              type="number"
              onChange={(val: number) => {}}
              placeholder="placeHolder"
              _placeholder={{ color: "gray.500" }}
              focusBorderColor="black.100"
              errorBorderColor="red.300"
              inputProps={{
                borderColor: "primary.main.bd",
                w: "auto",
              }}
            />
            <Text>~</Text>
            <Input
              type="number"
              onChange={(val: number) => {}}
              placeholder="placeHolder"
              _placeholder={{ color: "gray.500" }}
              focusBorderColor="black.100"
              errorBorderColor="red.300"
              inputProps={{
                borderColor: "primary.main.bd",
                w: "auto",
              }}
            />
          </Flex>
          <Flex>
            <InputDate
              type="double"
              value={{ start: "", end: "" }}
              onChange={() => {}}
            />
          </Flex>
        </Flex>
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterBsns = ({ areaCode }: { areaCode: string }) => {
  const [rent, setRent] = useRecoilState(infoComMyRent);
  const resetRent = useResetRecoilState(infoComMyRent);
  const [filter, setFilter] = useState({
    name: "",
    rank: [],
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setRent({ ...rent, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetRent();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})

    let transFilter: any = [
      {
        member: "Rent.areaCode",
        operator: "contains",
        values: [areaCode.slice(0, 5)],
      },
    ];

    filter.name &&
      transFilter.push({
        member: "Rent.rentName",
        operator: "contains",
        values: [filter.name],
      });

    filter.rank &&
      transFilter.push({
        member: "Rent.rentRank",
        operator: "contains",
        values: filter.rank,
      });

    cubejsApi
      .load({
        dimensions: ["Rent.areaCode", "Rent.rentName", "Rent.lat", "Rent.lng"],
        filters: transFilter,
      })
      .then((res) => {
        const result = res?.rawData().map((li: any) => {
          return {
            areaCode: li["Rent.areaCode"],
            name: li["Rent.rentName"],
            lat: li["Rent.lat"],
            lng: li["Rent.lng"],
          };
        });
        console.log(result);
        setRent({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={rent.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text w="5rem" fontSize="1.6rem">
          검색
        </Text>
        <Input
          type="number"
          onChange={(val: string) => {
            setFilter({
              ...filter,
              name: val,
            });
          }}
          placeholder="매물명, 코드검색"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        <Text w="5rem" fontSize="1.6rem">
          타입
        </Text>
        <FilterChkTagGroup
          chkValue={filter.rank}
          chkboxData={[
            { text: "A", value: "A" },
            { text: "B", value: "B" },
            { text: "C", value: "C" },
            { text: "D", value: "D" },
            { text: "E", value: "E" },
          ]}
          onChange={(val: any) => setFilter({ ...filter, rank: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

const FilterRent = ({ areaCode }: { areaCode: string }) => {
  const [rent, setRent] = useRecoilState(infoComMyRent);
  const resetRent = useResetRecoilState(infoComMyRent);
  const [filter, setFilter] = useState({
    name: "",
    rank: [],
  });
  const mapViewHandler = (active: boolean) => {
    console.log(`\non/off view enter`);
    setRent({ ...rent, active: active });
  };
  const resetFilter = () => {
    console.log(`\nreset FloatPopulation`);
    resetRent();
  };
  const searchHander = () => {
    console.log(`\nstart search FloatPopulation`);
    console.log(filter);
    //apiService(filter).then((res) => {})

    let transFilter: any = [
      {
        member: "Rent.areaCode",
        operator: "contains",
        values: [areaCode.slice(0, 5)],
      },
    ];

    filter.name &&
      transFilter.push({
        member: "Rent.rentName",
        operator: "contains",
        values: [filter.name],
      });

    filter.rank &&
      transFilter.push({
        member: "Rent.rentRank",
        operator: "contains",
        values: filter.rank,
      });

    cubejsApi
      .load({
        dimensions: ["Rent.areaCode", "Rent.rentName", "Rent.lat", "Rent.lng"],
        filters: transFilter,
      })
      .then((res) => {
        const result = res?.rawData().map((li: any) => {
          return {
            areaCode: li["Rent.areaCode"],
            name: li["Rent.rentName"],
            lat: li["Rent.lat"],
            lng: li["Rent.lng"],
          };
        });
        console.log(result);
        setRent({ data: result, active: true });
      });
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Flex w="100%" alignItems="center" flexDirection="row-reverse" gap="1rem">
        <Switch
          size="lg"
          isChecked={rent.active}
          onChange={(e) => {
            mapViewHandler(e.target.checked);
          }}
        />
        <IconButton
          aria-label="reset filter"
          icon={<SpinnerIcon />}
          onClick={resetFilter}
          bgColor="transparent"
          _hover={{
            color: "primary.reverse.font",
          }}
        />
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Text w="5rem" fontSize="1.6rem">
          검색
        </Text>
        <Input
          type="number"
          onChange={(val: string) => {
            setFilter({
              ...filter,
              name: val,
            });
          }}
          placeholder="매물명, 코드검색"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="black.100"
          errorBorderColor="red.300"
          inputProps={{
            borderColor: "primary.main.bd",
          }}
        />
      </Flex>
      <Flex flexDirection="row" w="100%">
        <Text w="5rem" fontSize="1.6rem">
          타입
        </Text>
        <FilterChkTagGroup
          chkValue={filter.rank}
          chkboxData={[
            { text: "A", value: "A" },
            { text: "B", value: "B" },
            { text: "C", value: "C" },
            { text: "D", value: "D" },
            { text: "E", value: "E" },
          ]}
          onChange={(val: any) => setFilter({ ...filter, rank: val })}
          activeTotal={true}
          parseTotalTxt="전체"
        />
      </Flex>
      <Button onClick={searchHander}>조회</Button>
    </Flex>
  );
};

export default FilterInfoCom;
