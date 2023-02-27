import { addressApi } from "api/daumApi/config";

const autoAddressCreator = async (data: any) => {
  console.log(data);
  let d: any[] = [];

  await data.map((li: any) => {
    addressApi
      .address(li.address)
      .then((res: any) => {
        const { documents, meta } = res;

        if (meta.total_count > 1) {
          console.log(li.address);
          console.log(documents);
        }
      })
      .catch((err) => console.log(err));
  });
};

const getAddressList = async (address: string) => {
  if (address) {
    return await new Promise((resolve, reject) => {
      addressApi
        .address(address)
        .then((res: any) => {
          if (res?.documents && res.documents.length > 0) {
            resolve(
              res.documents.map((document: any) => ({
                addressName: document.address_name,
                b_code: document.address.bCode,
                h_code: document.address.hCode,
              }))
            );
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  } else {
    return;
  }
};

export { autoAddressCreator, getAddressList };
