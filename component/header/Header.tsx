//  Lib
import { Flex } from "@chakra-ui/react";
//  Components
import MenuHeader from "component/menu/MenuHeader";
import ThemeBox from "component/header/ThemeBox";

const Header = () => {
  return (
    <Flex w="100%" h="6rem" zIndex={999}>
      <Flex
        position="fixed"
        top="0"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        w="100%"
        h="inherit"
        bgColor="primary.main.bg"
        borderBottom="1px solid"
        borderColor="primary.main.bdColor"
      >
        <MenuHeader />
        <ThemeBox />
      </Flex>
    </Flex>
  );
};

export default Header;
