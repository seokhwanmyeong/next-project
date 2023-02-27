//  Lib
import { useRecoilState, useRecoilValue } from "recoil";
import { Flex, Button, useDisclosure } from "@chakra-ui/react";
//  State
import { themeList, atomThemeColor } from "store/theme/themeState";
//  Components
import Tag from "component/common/Tag";

const ThemeBox = () => {
  const themeArr = useRecoilValue(themeList);
  // const setThemeColor = useSetRecoilState(atomThemeColor);
  const [themeColor, setThemeColor] = useRecoilState(atomThemeColor);
  const { isOpen, onToggle } = useDisclosure();

  const themeHandler = (theme: string) => {
    if (theme === themeColor) {
      return;
    } else {
      onToggle();
      setThemeColor(theme);
    }
  };

  return (
    <Flex position="relative">
      <Button variant={"reverse"} onClick={onToggle}>
        Theme
      </Button>
      <Flex
        position="absolute"
        bottom="-50px"
        right="0"
        display={isOpen ? "flex" : "none"}
        opacity={isOpen ? 1 : 0}
        h="auto"
        p="10px"
        bgColor="primary.reverse.bg"
        border="1px solid"
        borderColor="primary.main.bdColor"
        borderRadius="5px"
        gap="5px"
        transition="0.5s"
      >
        {themeArr.map((li) => (
          <Tag
            key={`tag-theme-${li.key}`}
            tagBtn={true}
            text={li.title}
            isChecked={li.key === themeColor}
            variant="themeTag"
            onClick={() => {
              themeHandler(li.key);
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ThemeBox;
