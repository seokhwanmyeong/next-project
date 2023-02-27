//  LIB
import { useNavigate } from "react-router-dom";
//  API
import { loginApi } from "@api/bizApi/config";

const loginHandler = (val: { username: string; password: string }) => {
  const navigator = useNavigate();

  loginApi
    .login(val)
    .then((res) => {
      const { accessToken, expiresIn, userData } = res;
      console.log(res);

      if (expiresIn > 0) {
        localStorage.setItem("token", accessToken);
        navigator("/maps");
      } else {
        alert("expires is already");
      }
    })
    .catch((err) => console.log(err));
};

export { loginHandler };
