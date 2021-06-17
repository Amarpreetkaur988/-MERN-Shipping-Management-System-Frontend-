import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { toast } from "react-toastify";
import { IS_AUTHENTICATED } from "./types";
import { api_url } from "../utils/api";

export const adminLogin = (admin, history) => (dispatch) => {
  axios
    .post(api_url + "/api/admin/login", admin)
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        console.log("respone data", res.data.success)
        setAuthToken(res.data.data.token);
        localStorage.setItem("jwtToken", res.data.data.token);
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        toast.success("Logged in successfully");
        history.push("/admin/dashboard");
      }
    })
    .catch((err) => console.log(err));
};

export const adminForgotPassword = (email, role, history) => (dispatch) => {
  axios
    .post(api_url + "/api/admin/password/forgot", { email, role })
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        toast.success(res.data.msg);
        localStorage.setItem("admin_id", res.data.data.id);
        history.push("/admin/reset/password");
      }
    })
    .catch((err) => console.log(err));
};

export const adminResetPassword = (data, history) => (dispatch) => {
  axios
    .post(api_url + "/api/admin/password/reset", data)
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        toast.success(res.data.msg);
        history.push("/admin/login");
      }
    })
    .catch((err) => console.log(err));
};

export const logoutUser = (token, history) => (dispatch) => {
  axios
    .post(
      api_url + "/api/admin/logout",
      {},
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        localStorage.removeItem("jwtToken");
        toast.success(res.data.msg);
        history.push("/admin/login");
      }
    })
    .catch((err) => console.log(err));
};
