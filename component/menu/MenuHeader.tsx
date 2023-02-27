//  Lib
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Link from "next/link";
import { Grid, Link as ChakraLink } from "@chakra-ui/react";
//  State
import { mainRoute, MainRouteType } from "store/route/roueState";

const MenuHeader = () => {
  const rootState = useRouter();
  const menuList = useRecoilValue(mainRoute);

  return (
    <Grid
      h="inherit"
      gridTemplateColumns={`repeat(${menuList.length}, minmax(0, auto))`}
    >
      {menuList.map((menu: MainRouteType) => {
        return (
          <ChakraLink
            as={Link}
            key={`head-${menu.title}`}
            href={menu.path}
            fontWeight={rootState.route === menu.path ? "bold" : "normal"}
            variant={"linkBtn"}
            data-text={menu.title}
          >
            {menu.title}
          </ChakraLink>
        );
      })}
    </Grid>
  );
};

export default MenuHeader;
