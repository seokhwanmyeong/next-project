//  Api
import { addrDepthApi } from "api/sgisApi/config";

const addrApiHandler = async (addr: string) => {
  return await addrDepthApi
    .address(addr)
    .then((res) => {
      if (res.result) {
        return res.result.map(
          (addLi: {
            addr_name: string;
            cd: string;
            full_addr: string;
            x_coor: string;
            y_coor: string;
          }) => ({
            address: addLi.addr_name,
            code: addLi.cd,
          })
        );
      } else {
        console.log("no Address");
        return [];
      }
    })
    .catch((e) => console.log(e));
};

const addrAreaApiHandler = async (addr?: string) => {
  return await addrDepthApi
    .area(addr)
    .then((res) => {
      if (res.result) {
        console.log(res.result);
        return res.result.map(
          (addLi: {
            addr_name: string;
            cd: string;
            full_addr: string;
            x_coor: string;
            y_coor: string;
            ps?: any;
          }) => ({
            address: addLi.addr_name,
            code: addLi.cd,
            x: addLi.x_coor,
            y: addLi.y_coor,
          })
        );
      } else {
        console.log("no Address");
        return [];
      }
    })
    .catch((e) => console.log(e));
};

const dong = async (addr?: string) => {
  return await addrDepthApi
    .dong(addr)
    .then((res: any) => {
      const { errCd, errMsg, features, type } = res;

      if (errCd === 0 && features) {
        return { type, features };
      } else {
        console.log(errMsg);
        return null;
      }
    })
    .catch((e) => console.log(e));
};

export { addrApiHandler, addrAreaApiHandler, dong };
