import type { Query } from "@cubejs-client/core";

//  대쉬보드 페이지
const querySaleDashboard: {
  initQ: Query[];
} = {
  initQ: [
    {
      measures: [`Sales.sum`],
      dimensions: [`StoreInfo.storeName`],
      limit: 10,
      order: [["Sales.sum", "desc"]],
      timeDimensions: [
        {
          dimension: "Sales.saleDate",
          granularity: "month",
        },
      ],
    },
    {
      measures: [`Sales.sum`],
      dimensions: [`Sales.menuNm`],
      limit: 10,
      order: [["Sales.sum", "desc"]],
      timeDimensions: [
        {
          dimension: "Sales.saleDate",
          granularity: "month",
        },
      ],
    },
    {
      measures: [`Sales.sum`],
      dimensions: [`Sales.dlvType`],
      limit: 10,
      order: [["Sales.sum", "asc"]],
      timeDimensions: [
        {
          dimension: "Sales.saleDate",
          granularity: "month",
        },
      ],
    },
  ],
};

//  매장리스트페이지
const queryStoreList: {
  initQ: Query;
  totalQ: { measures: string[] };
} = {
  initQ: {
    measures: [`StoreInfo.count`],
    dimensions: [
      `StoreInfo.storeName`,
      `StoreInfo.storeCode`,
      `StoreInfo.addr`,
      `StoreInfo.addrDetail`,
      `StoreInfo.storeStatus`,
      `StoreInfo.storeRank`,
      `StoreInfo.openDate`,
    ],
    timeDimensions: [],
    limit: 10,
    offset: 1,
  },
  totalQ: {
    measures: [`StoreInfo.count`],
  },
};

//  매장상세페이지 _ 기본정보
const queryStoreInfo = {
  initQ: {
    dimensions: [
      `StoreInfo.storeName`,
      `StoreInfo.storeCode`,
      `StoreInfo.storeStatus`,
      `StoreInfo.storeRank`,
      `StoreInfo.phone`,
      `StoreInfo.addr`,
      `StoreInfo.addrDetail`,
      `StoreInfo.openDate`,
      `StoreInfo.lat`,
      `StoreInfo.lng`,
    ],
  },
};

//  매장상세페이지 _ 매출
const queryStoreSale: {
  initQ: Query[];
} = {
  initQ: [
    {
      measures: [`Sales.sum`],
      dimensions: [`StoreInfo.storeName`],
      order: [["Sales.sum", "desc"]],
      timeDimensions: [
        {
          dimension: "Sales.saleDate",
          compareDateRange: ["Last month", "Last quarter"],
          granularity: "month",
        },
      ],
    },
    // {
    //   measures: [`Sales.sum`],
    //   dimensions: [`Sales.storeName`],
    //   timeDimensions: [
    //     {
    //       dimension: "Sales.saleDate",
    //       dateRange: "Last quarter",
    //       granularity: "day",
    //     },
    //   ],
    // },
    {
      measures: [`Sales.sum`],
      dimensions: [`Sales.menuNm`],
      limit: 3,
      order: [["Sales.sum", "desc"]],
      timeDimensions: [
        {
          dimension: "Sales.saleDate",
          granularity: "month",
        },
      ],
    },
    {
      measures: [`Sales.sum`],
      dimensions: [`Sales.dlvType`],
      limit: 3,
      order: [["Sales.sum", "desc"]],
      timeDimensions: [
        {
          dimension: "Sales.saleDate",
          granularity: "month",
        },
      ],
    },
  ],
};

//  매출페이지
const querySaleList = {
  initQ: {
    measures: [`Sales.avg`, `Sales.sum`],
    dimensions: [
      `StoreInfo.storeName`,
      `StoreInfo.storeCode`,
      `StoreInfo.storeRank`,
      `StoreInfo.openDate`,
    ],
    limit: 10,
    offset: 1,
  },
  totalQ: {
    measures: [`StoreInfo.count`],
  },
};

export {
  querySaleDashboard,
  queryStoreList,
  queryStoreInfo,
  queryStoreSale,
  querySaleList,
};
