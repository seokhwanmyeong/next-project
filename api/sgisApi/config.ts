//  LIB
import axios, { AxiosInstance } from "axios";
import dayjs from "dayjs";

interface AxiosInterceptorManager {}

type AxiosRequestConfig = {};

interface SgisApiInstance extends AxiosInstance {
  interceptors: {
    request: any;
    response: any;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<R, T>(url: string, data?: R, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

//  SGIS Api Instance
const instance: SgisApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SGIS_URL,
  responseType: "json",
  responseEncoding: "utf8",
  timeout: 3000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const loginInstance: SgisApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SGIS_URL,
  responseType: "json",
  responseEncoding: "utf8",
  timeout: 3000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

//  SGIS Api interceptors
instance.interceptors.request.use((req: any) => {
  const localStorage = window.localStorage;
  const sgisTokenInfo = localStorage.getItem("sg");
  const parseJson = sgisTokenInfo ? JSON.parse(sgisTokenInfo) : null;

  if (parseJson?.tk && parseJson?.to) {
    const { tk, to } = parseJson;

    if (dayjs().valueOf() < Number(to)) {
      req.params = { ...req.params, accessToken: tk };
      return req;
    } else {
      const accessReq = getAccessToken()
        .then((loginRes) => {
          if (loginRes?.data?.result) {
            const { accessToken, accessTimeout } = loginRes.data.result;

            localStorage.setItem(
              "sg",
              JSON.stringify({ tk: accessToken, to: accessTimeout })
            );
            req.params = { ...req.params, accessToken: accessToken };
            return req;
          } else {
            return Promise.reject("getAccessToken Error");
          }
        })
        .catch((err) => {
          return Promise.reject(err);
        });

      return accessReq;
    }
  } else {
    const accessReq = getAccessToken()
      .then((loginRes) => {
        if (loginRes?.data?.result) {
          const { accessToken, accessTimeout } = loginRes.data.result;

          localStorage.setItem(
            "sg",
            JSON.stringify({ tk: accessToken, to: accessTimeout })
          );
          req.params = { ...req.params, accessToken: accessToken };
          return req;
        } else {
          return Promise.reject("getAccessToken Error");
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });

    return accessReq;
  }
});

instance.interceptors.response.use(
  async (res: any) => {
    switch (parseInt(res.data.errCd)) {
      case 0:
        return res.data;
      case -401:
        console.log(res);
        console.log("유효기간만료");
        let req = res.config;

        const { data } = await getAccessToken();

        if (data?.result && req) {
          const { accessToken, accessTimeout } = data.result;

          localStorage.setItem(
            "sg",
            JSON.stringify({ tk: accessToken, to: accessTimeout })
          );
          req.params = { ...req.params, accessToken: accessToken };
          return axios(req);
        } else {
          Promise.reject("getAccessToken Error");
          // return req;
        }

      // getAccessToken()
      //   .then((loginRes) => {
      //     console.log(loginRes);
      //     if (loginRes?.data?.result && req) {
      //       const { accessToken, accessTimeout } = loginRes.data.result;

      //       localStorage.setItem(
      //         "sg",
      //         JSON.stringify({ tk: accessToken, to: accessTimeout })
      //       );
      //       req.params = { ...req.params, accessToken: accessToken };

      //       return req;
      //     } else {
      //       console.log("getAccessToken Error");
      //       return req;
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     return Promise.reject(err);
      //   });

      // console.log(accessReq);
      // return accessReq;
      case -100:
        return Promise.reject("error -100");
    }
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

//  Api Module
const getAccessToken = () =>
  loginInstance.get<any>(`/auth/authentication.json`, {
    params: {
      consumer_key: process.env.NEXT_PUBLIC_SGIS_ID,
      consumer_secret: process.env.NEXT_PUBLIC_SGIS_AUTH,
    },
  });

const addrDepthApi = {
  address: (addrCode: string) =>
    instance.get<{
      errCd: number;
      errMsg: string;
      id: string;
      result: {
        addr_name: string;
        cd: string;
        full_addr: string;
        x_coor: string;
        y_coor: string;
      }[];
      trId: string;
    }>(`/addr/stage.json`, { params: { pg_yn: 0, cd: addrCode } }),
  area: (addrCode?: string) =>
    instance.get<{
      errCd: number;
      errMsg: string;
      id: string;
      result: {
        addr_name: string;
        cd: string;
        full_addr: string;
        x_coor: string;
        y_coor: string;
        ps?: any;
      }[];
      trId: string;
    }>(`/addr/stage.json`, {
      params: addrCode ? { pg_yn: 0, cd: addrCode } : { pg_yn: 0 },
    }),
  dong: (addrCode?: string) =>
    instance.get(`/boundary/hadmarea.geojson`, {
      params: addrCode
        ? { year: 2022, low_search: 1, adm_cd: addrCode }
        : { year: 2022, low_search: 0 },
    }),
};

export { addrDepthApi, getAccessToken };
