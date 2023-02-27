const linkTheme = {
  baseStyle: {
    color: "primary.main.font",
    textDecoration: "none",
    outline: "none",
    _hover: {
      fontWeight: "bold",
      textDecoration: "none",
    },
    _active: {
      fontWeight: "bold",
      textDecoration: "none",
    },
  },
  sizes: {},
  variants: {
    linkBtn: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      h: "100%",
      p: "0 2rem",
      fontSize: "1.6rem",
      color: "primary.main.font",
      transition: "all 0.3s",
      _before: {
        content: "attr(data-text)",
        opacity: 0,
        h: "0",
        visibility: "hidden",
        overflow: "hidden",
        userSelect: "none",
        pointerEvents: "none",
        fontWeight: "bold",
      },
      _after: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        content: "attr(data-text)",
        opacity: 0,
        p: "0 2rem",
        w: "100%",
        h: "auto",
        visibility: "hidden",
        overflow: "hidden",
        userSelect: "none",
        pointerEvents: "none",
        textAlign: "center",
        fontSize: "1.6rem",
        fontWeight: "bold",
        transition: "all 0.3s",
      },
      _hover: {
        _after: {
          opacity: 1,
          visibility: "visible",
        },
      },
    },
  },
  defaultProps: {},
};

export default linkTheme;
