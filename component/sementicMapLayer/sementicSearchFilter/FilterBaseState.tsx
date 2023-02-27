//  Lib
import { Fragment, memo, useContext } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Flex, Button } from "@chakra-ui/react";
//  State
import {
  atomAreaOption,
  areaSelectActivator,
  atomArea,
} from "store/sementic/sementicState";
import { BaseAreaContext } from "../filter/BaseAreaProvider";

const FilterBaseState = () => {
  const { activeHandler, activeDraw, activeDrawHandler } =
    useContext(BaseAreaContext);
  console.log("render FilterBaseState");

  return (
    <Flex>
      <Button
        w="100%"
        variant="reverse"
        onClick={() => {
          if (activeDraw) {
            activeDrawHandler(false);
          }
          activeHandler(true);
        }}
      >
        지역변경하기
      </Button>
    </Flex>
  );
};

export default FilterBaseState;
