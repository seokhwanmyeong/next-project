// Lib
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const tagTheme = {
  baseStyle: {
    container: {
      alignSelf: "baseline",
      border: "none",
    },
    label: {},
    closeButton: {},
  },
  variants: {
    filterOption: {
      container: {
        w: "auto",
        bg: "primary.main.bg",
        alignSelf: "baseline",
        justifyContent: "space-between",
      },
      label: {
        color: "primary.main.font",
      },
    },
    checkbox: {
      container: {
        w: "auto",
        bg: "primary.main.bg",
        alignSelf: "baseline",
        justifyContent: "space-between",
      },
      label: {
        color: "primary.main.font",
      },
    },
    themeTag: {
      container: {},
      label: {},
    },
  },
  defaultProps: {},
};

export default tagTheme;
