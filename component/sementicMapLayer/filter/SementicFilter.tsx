//  Lib
import React, { ReactNode, useEffect } from "react";
import { Flex, Text, Stack, Button, useColorMode } from "@chakra-ui/react";
//  Components
import Tag from "component/common/Tag";
//  States
import {
  atomSementicState,
  atomInfoCom,
  selectorInfoCom,
} from "store/sementic/sementicState";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

type Props = {};
type FilterGroup = {
  title: string;
  data?: { [key: string]: any };
  dataKey?: string;
};

const SementicFilter = (props: any) => {
  const infoComs = useRecoilValue(atomInfoCom);
  const resetOption = useResetRecoilState(atomSementicState);
  const setInfoCom = useSetRecoilState(selectorInfoCom);
  const mode = useColorMode();

  const FilterGroup = (props: FilterGroup) => {
    const { title = "항목", data = {} } = props;

    return (
      <Flex
        p="0 1rem"
        alignItems="center"
        justifyContent="center"
        transition="0.5s"
      >
        <Text mr="1rem">{title}</Text>
        <Flex>
          {data.map((infoCom: string) => (
            <Tag
              key={`tag-${infoCom}`}
              text={infoCom}
              hasBtn={true}
              onClick={() =>
                setInfoCom({
                  method: "remove",
                  infoCom: infoCom,
                })
              }
            />
          ))}
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex
      w="100%"
      h="100%"
      p="1rem 2rem"
      alignItems="center"
      justifyContent="left"
      borderBottom="1px solid"
      borderColor={mode.colorMode === "dark" ? "#ffffff29" : "#ededed"}
      transition="0.5s"
    >
      <FilterGroup title="InfoCom" data={infoComs} />
      {/* <FilterGroup title="업종" data={sementiceOptions} dataKey="sector" /> */}
      <Button onClick={resetOption}>Reset Option</Button>
    </Flex>
  );
};

export default SementicFilter;
