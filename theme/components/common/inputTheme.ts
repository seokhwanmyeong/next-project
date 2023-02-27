const inputTheme = {
  baseStyle: {
    // addon: {},
    // field: {},
    // element: {},
  },
  sizes: {},
  variants: {
    fileHidden: {
      field: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        m: 0,
        p: 0,
        pl: "100%",
        w: "100%",
        h: "100%",
        borderRadius: "base",
        opacity: 0.5,
        zIndex: 1,
        cursor: "pointer",
        border: "1px dashed",
        borderColor: "primary.main.bdColor",
        _hover: {
          border: "1px dashed",
          opacity: 1,
        },
      },
    },
    form: {},
  },
  defaultProps: {},
};

export default inputTheme;
