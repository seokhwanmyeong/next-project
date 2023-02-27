//  Lib
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
//  Default
import resetTheme from "theme/reset";
//  Common
import headingTheme from "theme/components/common/headingTheme";
import inputTheme from "theme/components/common/inputTheme";
import { btnTheme } from "theme/components/common/btnTheme";
import tagTheme from "theme/components/common/tagTheme";
import checkboxTheme from "theme/components/common/checkBoxTheme";
import accordionTheme from "theme/components/menu/accordionTheme";
import linkTheme from "theme/components/common/Link";
import selectTheme from "theme/components/common/selectTheme";
import themeTable from "theme/components/table/tableTheme";
import formTheme from "theme/components/form/formTheme";
import switchTheme from "theme/components/common/switchTheme";
import radioTheme from "theme/components/common/radioTheme";
//  Foundation
import { fndtSize } from "theme/foundation/fndtSize";
import { fndtRadius } from "theme/foundation/fndtRadius";
import { selectColorScheme } from "theme/foundation/fndtColor";

const createTheme = (name: string) => {
  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };
  const theme = extendTheme({
    config,
    styles: {
      global: resetTheme,
    },
    colors: selectColorScheme(name),
    size: fndtSize,
    radii: fndtRadius,
    breakpoints: {
      mobile: "320px",
      tablet: "768px",
      pc: "1280px",
    },
    fontSizes: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: "2.4rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    textStyles: {
      base: {
        fontSize: "md",
      },
      list: {
        title: {
          fontSize: "lg",
          color: "primary.main.font",
          opacity: 0.8,
        },
        text: {
          fontSize: "lg",
          color: "primary.main.font",
        },
      },
    },
    components: {
      Input: inputTheme,
      Button: btnTheme,
      Tag: tagTheme,
      Accordion: accordionTheme,
      Checkbox: checkboxTheme,
      Radio: radioTheme,
      Select: selectTheme,
      Link: linkTheme,
      Heading: headingTheme,
      Table: themeTable,
      Form: formTheme,
      Switch: switchTheme,
      Tabs: {
        variants: {
          detailPage: {
            root: {
              w: "100%",
            },
            tablist: {
              w: "100%",
              justifyContent: "flex-start",
              borderBottom: "1px solid #DEDEDE",
            },
            tab: {
              p: "0.5rem 3rem",
              borderTop: "1px solid",
              borderRight: "1px solid",
              borderColor: "#DEDEDE",
              color: "primary.main.font",
              _first: {
                borderLeft: "1px solid",
                borderLeftRadius: "base",
                borderBottomRadius: "0",
                borderColor: "#DEDEDE",
              },
              _last: {
                borderRightRadius: "base",
                borderBottomRadius: "0",
                borderColor: "#DEDEDE",
              },
              _selected: {
                backgroundColor: "primary.reverse.bg",
                fontWeight: "bold",
                color: "primary.reverse.font",
              },
            },
            tabpanels: {},
            tabpanel: {
              p: "3rem",
            },
          },
        },
      },
    },
  });

  return theme;
};

export { createTheme };
