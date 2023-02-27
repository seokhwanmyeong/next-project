import { erpStoreApi } from "@api/bizApi/config";

type PropsTable = {
  reqBody: any;
  dataSet: React.Dispatch<React.SetStateAction<any>>;
  refSet: React.Dispatch<React.SetStateAction<number>>;
};

// const commonApiTable = (url: PropsURL) => {
//   const getApiTable = ({ dataSet, refSet }: BaseTableReq) => {
//     instance
//       .get<any>(url)
//       .then((res) => {
//         console.log(res);
//         const { pageNo, pageSize, records, totalCount } = res;

//         dataSet(records);
//         refSet(totalCount);
//         console.log("api End");
//       })
//       .catch((err) => {
//         console.log("Error Name : ", err.name);
//         console.log("Error Code : ", err.code);
//         console.log("Error Message : ", err.message);
//         console.log("Error Config : ", err.config);
//         console.log("Error Req : ", err.request);
//       });
//   };

//   const setApiTable = ({ reqBody, dataSet, refSet }: BaseTableReq) => {
//     instance
//       .post<any, BaseResponse>(url, reqBody)
//       .then((res) => {
//         console.log(res);
//         const { pageNo, pageSize, records, totalCount } = res;

//         dataSet(records);

//         refSet(totalCount);
//         console.log("api End");
//       })
//       .catch((err) => {
//         console.log("Error Name : ", err.name);
//         console.log("Error Code : ", err.code);
//         console.log("Error Message : ", err.message);
//         console.log("Error Config : ", err.config);
//         console.log("Error Req : ", err.request);
//       });
//   };

//   return {
//     initReq: initReq[url],
//     getTable: getApiTable,
//     setTable: setApiTable,
//   };
// };
