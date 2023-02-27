//  Lib
import { atom, selector, selectorFamily } from "recoil";

type MainRouteType = {
  title: string;
  path: string;
  root: string;
  index?: boolean;
  hasSub: boolean;
  page?: (props: any) => JSX.Element;
};

type SubRouteType = {
  title: string;
  hasChild: boolean;
  path: string;
  children?: DepthRouteType[];
  page?: (props: any) => JSX.Element;
  isMenu: boolean;
};

type DepthRouteType = {
  title: string;
  path: string;
  page: (props: any) => JSX.Element;
  isMenu: boolean;
};

export type { MainRouteType, SubRouteType, DepthRouteType };

export const loginRoute = atom<Array<MainRouteType>>({
  key: "loginRoute",
  default: [
    {
      root: "",
      title: "Login",
      path: "",
      hasSub: false,
    },
  ],
});

export const mainRoute = atom<Array<MainRouteType>>({
  key: "mainRoute",
  default: [
    {
      root: "maps",
      title: "Map",
      path: "/maps",
      hasSub: false,
    },
    {
      root: "erp",
      title: "ERP",
      path: "/erp",
      hasSub: true,
    },
    {
      root: "mypage",
      title: "My Page",
      path: "/mypage",
      hasSub: true,
    },
  ],
});

export const commonRoute = atom<Array<MainRouteType>>({
  key: "commonRoute",
  default: [
    {
      root: "join",
      title: "Join",
      path: "/join",
      hasSub: false,
    },
  ],
});

export const subRoute = atom<{
  [key: string]: SubRouteType[];
}>({
  key: "subRoute",
  default: {
    //  index path = 'index'
    //  key = root _ mainRoute property ,
    //  value = subRoute List
    erp: [
      {
        title: "DashBoard",
        hasChild: false,
        path: "index",
        isMenu: true,
      },
      {
        title: "매장",
        hasChild: false,
        path: "store",
        isMenu: true,
      },
      {
        title: "매장상세보기",
        hasChild: false,
        path: "store/detail",
        isMenu: false,
      },
      {
        title: "매출",
        hasChild: false,
        path: "sale",
        isMenu: true,
      },
      {
        title: "상권",
        hasChild: false,
        path: "bsnsDis",
        isMenu: true,
      },
      {
        title: "매물",
        hasChild: false,
        path: "rent",
        isMenu: true,
      },
      {
        title: "매장상세보기",
        hasChild: false,
        path: "rent/detail",
        isMenu: false,
      },
      {
        title: "고객",
        hasChild: false,
        path: "client",
        isMenu: true,
      },
      {
        title: "고객상세보기",
        hasChild: false,
        path: "client/detail",
        isMenu: false,
      },
      // {
      //   title: "브랜드 기준",
      //   hasChild: false,
      //   path: "brand",
      //   page: ErpBrand,
      //   isMenu: true,
      // },
      // {
      //   title: "Sample Table",
      //   hasChild: true,
      //   path: "erp02",
      //   isMenu: true,
      //   children: [
      //     {
      //       title: "BaseTable",
      //       path: "erpBaseTable",
      //       page: ErpBaseTable,
      //       isMenu: true,
      //     },
      //   ],
      // },
      // {
      //   title: "상세정보 견본: Tab",
      //   hasChild: false,
      //   path: "erpSample",
      //   page: ErpDetailSample,
      //   isMenu: true,
      // },
    ],
    mypage: [
      {
        title: "계정 관리",
        hasChild: false,
        path: "index",
        isMenu: true,
      },
      {
        title: "회사 관리",
        hasChild: false,
        path: "company",
        isMenu: true,
      },
    ],
  },
});

export const mainRouteSelector = selector({
  key: "mainRouteSelector",
  get: ({ get }) => {
    return [...get(loginRoute), ...get(mainRoute), ...get(commonRoute)];
  },
});

export const subMenuSelector = selectorFamily({
  key: "subMenuSelect",
  get:
    (root: string) =>
    ({ get }) => {
      const route = get(subRoute);

      return route[root];
    },
});
