const radioTheme = {
  baseStyle: {
    container: {},
    label: {
      fontSize: "1.2rem",
    },
    control: {
      w: "1.2rem",
      h: "1.2rem",
    },
    icon: {},
  },
  variants: {
    withTag: {
      control: { display: "none" },
      container: {},
      label: { m: "0px" },
      icon: { display: "none" },
    },
  },
  defaultProps: {},
};

export default radioTheme;
