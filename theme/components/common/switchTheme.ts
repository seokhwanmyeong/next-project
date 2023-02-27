const switchTheme = {
  variants: {
    view: {
      container: {},
      thumb: {
        transform: "translateX(3.5rem - 1.5rem)",
        _checked: {
          transform: "translateX(2rem)",
        },
      },
      track: {
        w: "3.5rem",
        h: "1.5rem",
      },
    },
  },
  defaultProps: {
    variant: "view",
  },
};

export default switchTheme;
