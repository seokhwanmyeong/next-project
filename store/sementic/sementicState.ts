import { atom, atomFamily, selector, selectorFamily } from "recoil";

type SearchOption = {
  [key: string]: any;
};

//  Base Option Data
export const atomSementicBaseList = atom<{ [key: string]: any }>({
  key: "sementicBaseList",
  default: {
    infoCom: {
      title: "InfoCom",
      content: [
        {
          title: "인구",
          cate: "popu",
          list: [
            { title: "인구밀도", key: "population" },
            { title: "밀집도", key: "congestion" },
            { title: "성비", key: "gender" },
          ],
        },
        {
          title: "업종",
          cate: "upjong",
          list: [
            { title: "업종1", key: "upjong1" },
            { title: "업종2", key: "upjong2" },
            { title: "업종3", key: "upjong3" },
          ],
        },
      ],
    },
    upjong: {
      title: "업종",
      mainUpjong: {
        title: "대분류",
        list: [
          {
            title: "Total",
            key: "totalUpjong",
            code: "total",
          },
          {
            title: "대분류1",
            key: "mainUpjong01",
            code: "m01",
            midUpjong: {
              title: "중분류",
              list: [
                {
                  title: "1-중분류1",
                  key: "midUpjong01",
                  code: "mid0101",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "1-1-소분류1", key: "111", code: "111" },
                      { title: "1-1-소분류2", key: "112", code: "112" },
                      { title: "1-1-소분류3", key: "113", code: "113" },
                    ],
                  },
                },
                {
                  title: "1-중분류2",
                  key: "midUpjong02",
                  code: "mid0102",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "1-2-소분류1", key: "121", code: "121" },
                      { title: "1-2-소분류2", key: "122", code: "122" },
                      { title: "1-2-소분류3", key: "123", code: "123" },
                    ],
                  },
                },
                {
                  title: "1-중분류3",
                  key: "midUpjong03",
                  code: "mid0103",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "1-3-소분류1", key: "131", code: "131" },
                      { title: "1-3-소분류2", key: "132", code: "132" },
                      { title: "1-3-소분류3", key: "133", code: "133" },
                    ],
                  },
                },
                {
                  title: "1-중분류4",
                  key: "midUpjong04",
                  code: "mid0104",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "1-3-소분류1", key: "131", code: "131" },
                      { title: "1-3-소분류2", key: "132", code: "132" },
                      { title: "1-3-소분류3", key: "133", code: "133" },
                    ],
                  },
                },
                {
                  title: "1-중분류5",
                  key: "midUpjong05",
                  code: "mid0105",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "1-3-소분류1", key: "131", code: "131" },
                      { title: "1-3-소분류2", key: "132", code: "132" },
                      { title: "1-3-소분류3", key: "133", code: "133" },
                    ],
                  },
                },
              ],
            },
          },
          {
            title: "대분류2",
            key: "mainUpjong02",
            code: "m2",
            midUpjong: {
              title: "중분류",
              list: [
                {
                  title: "2-중분류1",
                  key: "midUpjong01",
                  code: "mid0201",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "2-1-소분류1", key: "211", code: "211" },
                      { title: "2-1-소분류2", key: "212", code: "212" },
                      { title: "2-1-소분류3", key: "213", code: "213" },
                    ],
                  },
                },
                {
                  title: "2-중분류2",
                  key: "midUpjong02",
                  code: "mid0202",
                  subUpjong: {
                    title: "소분류",
                    list: [
                      { title: "2-2-소분류1", key: "221", code: "221" },
                      { title: "2-2-소분류2", key: "222", code: "222" },
                      { title: "2-2-소분류3", key: "223", code: "223" },
                    ],
                  },
                },
                {
                  title: "2-중분류3",
                  key: "midUpjong03",
                  code: "mid0203",
                  subUpjong: {
                    titl: "소분류",
                    list: [
                      { title: "2-3-소분류1", key: "231", code: "231" },
                      { title: "2-3-소분류2", key: "232", code: "232" },
                      { title: "2-3-소분류3", key: "233", code: "233" },
                    ],
                  },
                },
              ],
            },
          },
          {
            title: "대분류3",
            key: "mainUpjong03",
          },
          {
            title: "대분류4",
            key: "mainUpjong04",
          },
          {
            title: "대분류5",
            key: "mainUpjong05",
          },
        ],
      },
    },
  },
});

//  Atom Effect Handler
const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedOption = localStorage.getItem(key);
    if (savedOption != null) {
      setSelf(JSON.parse(savedOption));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        if (
          newValue.pointer.isCheck &&
          newValue.area.isCheck &&
          newValue.sector.isCheck
        ) {
          setSelf({ ...newValue, baseCheck: true });
          localStorage.setItem(
            key,
            JSON.stringify({ ...newValue, baseCheck: true })
          );
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      }
    });
  };

//  Atom Search Option
export const atomSementicState = atom<SearchOption>({
  key: "sementicState",
  default: {
    pointer: {
      coord: {},
      address: "",
      isCheck: false,
    },
    area: {
      polygon: {},
      isCheck: true,
    },
    sector: {
      mainSector: "",
      midSector: "",
      subSector: "",
      code: "",
      isCheck: false,
    },
    infoCom: [],
    baseCheck: false,
  },
  effects: [sessionStorageEffect("sementicState")],
});

export const collectSementicState = selector({
  key: "collectSementicState",
  get: ({ get }) => {},
  set: ({ get, set }, key: any) => {
    const sementicState = get(atomSementicState);
    const atomList: any = {
      pointer: atomAreaOption,
      area: atomAreaOption,
      sector: atomSementicUpjong,
      // infoCom: atomInfoCom,
    };
    const atomData: any = get(atomList[key]);
    const newVal = key === ("pointer" || "area") ? atomData[key] : atomData;

    set(atomSementicState, {
      ...sementicState,
      [key]: { ...newVal, isCheck: true },
    });
  },
});

//  Check State
export const checkBaseState = selector({
  key: "checkBaseState",
  get: ({ get }) => {
    const map = get(atomAreaOption);

    return map.allCheck ? true : false;
  },
  set: ({ get, set }) => {},
});

//  Reset Handler _ atom (Map & Controll, Upjong, InfoCom)
export const resetSementicAtom = selector({
  key: "resetSementicAtom",
  get: () => {},
  set: ({ reset }) => {
    reset(atomAreaOption);
    reset(atomMapController);
    reset(atomSementicUpjong);
    reset(atomInfoCom);

    reset(infoComFloatPop);
    reset(infoComHousehold);
    reset(infoComUpjong);
    reset(infoComSale);
    reset(infoComMyStore);
    reset(infoComMyBsns);
    reset(infoComMyRent);
  },
});

//  State & Controll: Map(pointer, area) _ atom, selector
type ControllState = {
  [key: string]: any;
};

export const atomAreaOption = atom<{ [key: string]: any }>({
  key: "sementicMapState",
  default: {
    type: "area",
    activeState: false,
    address: null,
    polygon: null,
    pointer: {
      coord: {},
      address: "",
      isCheck: false,
    },
    area: {
      polygon: {},
      isCheck: true,
    },
    allCheck: false,
  },
});

export const selectorSementicMapState = selector({
  key: "selectorsementicMapState",
  get: ({ get }) => {},
  set: ({ get, set }, newVal: any) => {
    const { pointer, area } = newVal;

    set(atomAreaOption, {
      ...newVal,
      allCheck: pointer.isCheck && area.isCheck ? true : false,
    });
  },
});

export const areaSelectActivator = selector({
  key: "mapControllHandler",
  get: ({ get }) => {
    const mapControllState = get(atomMapController);

    return mapControllState.event;
  },
  set: ({ get, set }, val: any) => {
    const currentState = get(atomMapController);

    set(atomMapController, {
      ...currentState,
      event: val,
    });
  },
});

//  State: Upjong _ atom, selector
type Upjong = {
  mainUpjong: {
    title: string;
    code: string;
  };
  midUpjong: {
    title: string;
    code: string;
  };
  subUpjong: {
    title: string;
    code: string;
  };
  currentCode: string;
  allCheck: boolean;
};

export const atomSementicUpjong = atom<Upjong>({
  key: "sementicUpjong",
  default: {
    mainUpjong: {
      title: "",
      code: "",
    },
    midUpjong: {
      title: "",
      code: "",
    },
    subUpjong: {
      title: "",
      code: "",
    },
    currentCode: "",
    allCheck: false,
  },
});

export const selectorSementicUpjong = selector({
  key: "selectorSementicSector",
  get: ({ get }) => {},
  set: ({ set, get }, newVal: any) => {
    const sementicSector = get(atomSementicUpjong);

    set(atomSementicUpjong, { ...newVal, allCheck: true });
  },
});

//  State: InfoCom _ atom, selector
export const atomInfoCom = atom<string[]>({
  key: "infoCom",
  default: [],
});

export const selectorInfoCom = selector({
  key: "selectorInfoCom",
  get: ({ get }) => {},
  set: ({ set, get }, key: any) => {
    const infoComs = get(atomInfoCom);
    let newVal: string[] = infoComs.includes(key)
      ? infoComs.filter((li: string) => li !== key)
      : [...infoComs, key];

    newVal.length > 4 ? alert("선택제한 : 4") : set(atomInfoCom, newVal);
  },
});

export const atomMapController = atom<ControllState>({
  key: "atomMapController",
  default: {
    event: null,
  },
});

// 지역선택(맵 & 주소)
export const atomArea = atom<any>({
  key: "atomArea",
  default: {
    slctAreaName: null,
    slctAreaCode: null,
    eventName: "selectAreaHandler",
  },
});

// 필터 공통 그룹옵션

export const infoComFloatPop = atom<any>({
  key: "infoComFloatPop",
  default: {
    data: {},
    active: false,
    // type: "externalData",
    // category: "floatPop",
    // title: "유동인구",
    // baseFilter: [
    //   {
    //     title: "성별",
    //     key: "gender",
    //     type: "totalChk",
    //     value: [
    //       { label: "전체", value: "total" },
    //       { label: "남", value: "man" },
    //       { label: "녀", value: "woman" },
    //     ],
    //   },
    //   {
    //     title: "나이대",
    //     key: "age",
    //     type: "totalChk",
    //     value: [
    //       { label: "전체", value: "total" },
    //       { label: "20대", value: "20th" },
    //       { label: "30대", value: "30th" },
    //       { label: "40대", value: "40th" },
    //       { label: "50대", value: "50th" },
    //       { label: "60대", value: "60th" },
    //     ],
    //   },
    //   {
    //     title: "구간",
    //     key: "range",
    //     type: "range",
    //     value: { start: null, end: null },
    //   },
    // ],
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const infoComHousehold = atom<any>({
  key: "infoComHousehold",
  default: {
    data: {},
    active: false,
    // type: "externalData",
    // category: "household",
    // title: "세대수",
    // baseFilter: [
    //   {
    //     title: "성별",
    //     key: "gender",
    //     type: "totalChk",
    //     value: [
    //       { label: "전체", value: "total" },
    //       { label: "남", value: "man" },
    //       { label: "녀", value: "woman" },
    //     ],
    //   },
    // ],
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const infoComUpjong = atom<any>({
  key: "infoComUpjong",
  default: {
    data: {},
    active: false,
    // type: "externalData",
    // category: "upjong",
    // title: "업종 수",
    // baseFilter: {},
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const infoComSale = atom<any>({
  key: "infoComSale",
  default: {
    data: {},
    active: false,
    // type: "externalData",
    // category: "sale",
    // title: "매출",
    // baseFilter: {},
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const infoComBrandStandard = atom<any>({
  key: "infoComBrandSet",
  default: {
    type: "externalData",
    category: "brandStandard",
    title: "브랜드 필터",
    baseFilter: {},
    req: {},
    res: [],
    activeView: false,
    apiType: "nice",
    apiEvent: null,
  },
});

export const infoComBrand = atom<any>({
  key: "infoComBrand",
  default: {
    type: "externalData",
    category: "brand",
    title: "사업체 조회",
    baseFilter: {},
    req: {},
    res: [],
    activeView: false,
    apiType: "nice",
    apiEvent: null,
  },
});

export const infoComBuilding = atom<any>({
  key: "infoComBuilding",
  default: {
    type: "externalData",
    category: "building",
    title: "건물조회",
    baseFilter: {},
    req: {},
    res: [],
    activeView: false,
    apiType: "nice",
    apiEvent: null,
  },
});

export const infoComMyStore = atom<any>({
  key: "infoComMyStore",
  default: {
    data: [],
    active: false,
    // type: "brandData",
    // category: "store",
    // title: "매장조회",
    // baseFilter: {},
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const infoComMyBsns = atom<any>({
  key: "infoComMyBsns",
  default: {
    data: [],
    active: false,
    // type: "brandData",
    // category: "bsns",
    // title: "상권조회",
    // baseFilter: {},
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const infoComMyRent = atom<any>({
  key: "infoComMyRent",
  default: {
    data: [],
    active: false,
    // type: "brandData",
    // category: "rent",
    // title: "매물조회",
    // baseFilter: {},
    // req: {},
    // res: [],
    // activeView: false,
    // apiType: "nice",
    // apiEvent: null,
  },
});

export const sementicViewState = atom<any>({
  key: "sementicViewState",
  default: {
    viewId: "",
    props: null,
  },
});
