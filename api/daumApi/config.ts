//  LIB
import axios from "axios";

//  Daum Api Instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DAUM_URL,
  responseType: "json",
  responseEncoding: "utf8",
  timeout: 3000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_DAUM_AUTH}`,
  },
});

//  Daum Api interceptors
instance.interceptors.request.use((req: any) => {
  const { url, data } = req;
  // console.log("\nintercept Req\n", req);
  // console.log("\nReq url\n", url);
  // console.log("\nReq Data\n", data);
  return req;
});

instance.interceptors.response.use((res: any) => {
  if (res.data.meta.total_count > 1) {
    console.log("\nresponse\n", res);
  }
  return res.data;
});

type ResDaumAddress = {
  documents: [];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};

const addressApi = {
  address: (address: string, exact?: boolean) =>
    instance.get<ResDaumAddress>(
      `/v2/local/search/address?query=${address}&analyze_type=${
        exact ? "exact" : "similar"
      }`
    ),
};

export { addressApi };
