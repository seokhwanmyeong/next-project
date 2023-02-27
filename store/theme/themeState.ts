//  LIB
import { atom, selector } from "recoil";

const themeList = atom({
  key: "ThemeList",
  default: [
    {
      title: "Light",
      key: "light",
    },
    {
      title: "Dark",
      key: "dark",
    },
    {
      title: "BIZ",
      key: "biz",
    },
    {
      title: "BBQ",
      key: "bbq",
    },
  ],
});

const atomThemeColor = atom({
  key: "atomThemeColor",
  default: "dark",
});

const selectorThemeColor = selector({
  key: "selectorThemeColor",
  get: ({ get }) => {},
  set: ({ get, set }) => {},
});

export { themeList, atomThemeColor };
