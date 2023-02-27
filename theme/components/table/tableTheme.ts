const themeTable = {
  baseStyle: {
    table: {
      borderColor: "primary.main.bdColor",
    },
    thead: {
      zIndex: "2",
      tr: {
        zIndex: "1",
        th: {
          position: "sticky",
          top: 0,
          bgColor: "primary.main.bg",
          color: "primary.main.font",
          borderBottom: "0",
          textAlign: "center",
          wordBreak: "keep-all",
          zIndex: "1",
        },
        _last: {
          th: {
            _after: {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              borderBottom: "1px solid",
              borderColor: "primary.main.bdColor",
            },
          },
        },
      },
    },
    tbody: {
      zIndex: "1",
      tr: {
        td: {
          fontSize: "1.2rem",
          bgColor: "primary.main.bg",
          // border: "1px solid",
          // borderColor: "primary.main.bdColor",
          textAlign: "center",
          color: "primary.main.font",
        },
      },
    },
    tfoot: {
      tr: {
        th: {
          color: "primary.main.font",
          bgColor: "primary.main.bg",
          // border: "1px solid",
          // borderColor: "primary.main.bdColor",
          textAlign: "center",
        },
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export default themeTable;
