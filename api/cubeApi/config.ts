//  LIB
import cubejs from "@cubejs-client/core";

const cubejsApi = cubejs(process.env.NEXT_PUBLIC_CUBE_APIKEY, {
  apiUrl: process.env.NEXT_PUBLIC_CUBE_URL,
});

export default cubejsApi;
