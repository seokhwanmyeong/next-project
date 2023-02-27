import { useContext } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { Select } from "component/common/Select";
import { useRecoilState } from "recoil";
import { atomArea } from "store/sementic/sementicState";
import { BaseAreaContext } from "./BaseAreaProvider";

const SelectArea = () => {
  const [baseArea, setBaseArea] = useRecoilState(atomArea);
  const {
    addr,
    sidoList,
    sigunguList,
    sidoHandler,
    sigunguHandler,
    addrHandler,
  } = useContext(BaseAreaContext);
  const { sido, sigungu } = addr;

  const setTopArea = () => {
    if (sido.code && sigungu.code) {
      sigunguHandler({ code: "", name: "" });
    } else {
      sidoHandler({ code: "", name: "" });
    }
  };

  const setBaseAreaHandler = () => {
    if (!(sigungu.name && sigungu.code)) return;

    setBaseArea({
      ...baseArea,
      slctAreaName: sigungu.name,
      slctAreaCode: sigungu.code,
    });
  };

  return (
    <Flex
      position="absolute"
      top="1rem"
      left="50%"
      transform="translateX(-50%)"
      zIndex="100"
      flexDirection="column"
      transition="0.5s"
    >
      <Flex
        p="1.5rem 3rem"
        borderRadius="5px 5px 0 0"
        bgColor="primary.reverse.bg"
      >
        <Heading color="primary.reverse.font" fontWeight="700" fontSize="2xl">
          지역을 선택해주세요.
        </Heading>
      </Flex>
      <Flex
        flexDirection="column"
        gap="1rem"
        p="1.5rem 3rem"
        borderRadius="0 0 5px 5px"
        bgColor="primary.main.bg"
      >
        <Flex gap="0.5rem" w="35rem">
          <Select
            data={sidoList.map((si) => ({ code: si.code, name: si.name }))}
            opBaseTxt="name"
            opBaseId="code"
            opBaseKey="code"
            onChange={(val: any) => {
              let name: any;

              for (let i = 0; i < sidoList.length; i++) {
                if (sidoList[i].code) {
                  name = sidoList[i].name;
                  break;
                }
              }

              addrHandler({
                sido: { code: val, name: name },
                sigungu: { code: "", name: "" },
              });
            }}
            value={sido.code}
            defaultText={"시/도"}
          />
          <Select
            data={sigunguList.map((si) => ({
              code: si.code,
              name: si.name,
            }))}
            opBaseTxt="name"
            opBaseId="code"
            opBaseKey="code"
            onChange={(val: any) => {
              let name;

              for (let i = 0; i < sigunguList.length; i++) {
                if (sigunguList[i].code === val) {
                  name = sigunguList[i].name;
                  break;
                }
              }
              sigunguHandler({ code: val, name: name });
            }}
            isDisabled={sigunguList.length > 0 ? false : true}
            value={sigungu.code}
            defaultText={"시/군/구"}
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Button isDisabled={!sido.code && !sigungu.code} onClick={setTopArea}>
            상위지역
          </Button>
          <Button
            isDisabled={!(sigungu.code && sigungu.name)}
            onClick={setBaseAreaHandler}
          >
            설정완료
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SelectArea;
