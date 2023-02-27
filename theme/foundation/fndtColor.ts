export const selectColorScheme = (type: string) => {
  const fndtColor: { [key: string]: {} } = {
    light: {
      primary: {
        main: {
          color: "#ffffff",
          bg: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#ededed",
        },
        reverse: {
          color: "#1a202c",
          bg: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
      },
      secondary: {
        main: {
          color: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "ededed",
        },
        reverse: {
          color: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "ededed",
        },
      },
      confirm: {
        main: "#00B050",
        hover: "#1751ff",
        disabled: "#96b0ff",
        font: "#ffffff",
      },
      cancel: {
        main: "#ff6161",
        hover: "#ff2929",
        disabled: "#ffb4b4",
        font: "#ffffff",
      },
    },
    dark: {
      primary: {
        main: {
          color: "#1a202c",
          bg: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
        reverse: {
          color: "#ffffff",
          bg: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#ededed",
        },
      },
      secondary: {
        main: {
          color: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
        reverse: {
          color: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#ededed",
        },
      },
      confirm: {
        main: "#00B050",
        hover: "#1751ff",
        disabled: "#96b0ff",
        font: "#ffffff",
      },
      cancel: {
        main: "#ff6161",
        hover: "#ff2929",
        disabled: "#ffb4b4",
        font: "#ffffff",
      },
    },
    biz: {
      primary: {
        main: {
          color: "#FFC000",
          bg: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#FFC000",
        },
        reverse: {
          color: "#1a202c",
          bg: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
      },
      secondary: {
        main: {
          color: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
        reverse: {
          color: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#ededed",
        },
      },
      confirm: {
        main: "#00B050",
        hover: "#1751ff",
        disabled: "#96b0ff",
        font: "#ffffff",
      },
      cancel: {
        main: "#ff6161",
        hover: "#ff2929",
        disabled: "#ffb4b4",
        font: "#ffffff",
      },
    },
    bbq: {
      primary: {
        main: {
          color: "#c70a2f",
          bg: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#c70a2f",
        },
        reverse: {
          color: "#c70a2f",
          bg: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
      },
      secondary: {
        main: {
          color: "#ffffff",
          hover: "#dddddd",
          font: "#1a202c",
          bdColor: "#ededed",
        },
        reverse: {
          color: "#1a202c",
          hover: "#555555",
          font: "#ffffff",
          bdColor: "#ededed",
        },
      },
      confirm: {
        main: "#00B050",
        hover: "#1751ff",
        disabled: "#96b0ff",
        font: "#ffffff",
      },
      cancel: {
        main: "#ff6161",
        hover: "#ff2929",
        disabled: "#ffb4b4",
        font: "#ffffff",
      },
    },
  };

  return fndtColor[type] ?? fndtColor["dark"];
};
