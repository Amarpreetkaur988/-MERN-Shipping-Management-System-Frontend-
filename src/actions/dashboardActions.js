import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import {
  IS_LOADING,
  VERIFY_ERROR,
  ADMIN_PROFILE_DATA,
  FAQ,
  ABOUT,
  HELP,
  TERM,
  ALL_SUBSCRIPTIONS,
  GET_SUBSCRIPTION,
  SINGLE_FAQ,
  DASHBOARD_STATS,
  QUESTIONAIRE,
  GET_QUESTION,
  ALL_CATEGORY,
  GET_CMS,
  GET_MANAGERS,
  GET_MANAGER,
  GET_STAFFS,
  GET_STAFF,
  Blog, 
  BLOG,
  SINGLE_BLOG,
  VERIFY_SUCCESS,
} from "./types";
import { api_url } from "../utils/api";

/* ------------------------------------------------------------------------------------- */

// Verify Email

export const verifyEmail = (id) => (dispatch) => {
  axios
    .post(api_url + `/api/admin/verify/email`, { id })
    .then((res) => {
      if (res.data.error) {
        dispatch({ type: VERIFY_ERROR, payload: res.data.error });
      }

      if (res.data.success) {
        dispatch({ type: VERIFY_SUCCESS, payload: res.data.msg });
      }
    })
    .catch((err) => console.log(err));
};

/* ------------------------------------------------------------------------------------- */



export const createManager = (manager, token) => (dispatch) => {
  axios
    .post(api_url + `/api/admin/manager/add`, manager, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        dispatch({ type: GET_MANAGERS, payload: res.data.data.managers });
        sessionStorage.setItem("total_managers", res.data.data.totalmanagers);
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const searchManagers = (query, token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/manager/search?query=${query}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_MANAGERS,
          payload: res.data.data.managers,
        });
      }
    })
    .catch((err) => console.log(err));
};





export const searchCaptains = (query, token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/captain/search?query=${query}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_STAFFS,
          payload: res.data.data.captains,
        });
      }
    })
    .catch((err) => console.log(err));
};


/* category ------------------------------------------------------------------------------------- */

export const addCategory = (category, token) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });
  console.log("categoru", category)
  axios
    .post(api_url + `/api/admin/category/add`, category, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.error) {
        dispatch({ type: IS_LOADING, payload: false });
        return toast.error(res.data.error);
      }
      if (res.data.success) {
        dispatch({
          type: ALL_CATEGORY,
          payload: res.data.data.categories,
        });

        dispatch({ type: IS_LOADING, payload: false });

        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};
/* ------------------------------------------------------------------------------------- */

// Profile

export const getProfile = (token) => (dispatch) => {
  try {
    var decode = jwt_decode(token);
  } catch (error) {
    console.log(error);
  }

  if (decode) {
    console.log("decode==", decode)
    axios
      .get(api_url + `/api/admin/profile/${decode.id}`, {
        headers: { "x-access-token": token },
      })
      .then((res) => {
        if (res.data.success) {
          dispatch({ type: ADMIN_PROFILE_DATA, payload: res.data.data.admin });
        }
      })
      .catch((err) => console.log(err));
  }
};

export const submitProfile = (profile, token) => (dispatch) => {
  try {
    dispatch({ type: IS_LOADING, payload: true });

    var decode = jwt_decode(token);
  } catch (error) {
    console.log(error);
  }

  profile.append("id", decode.id);

  axios
    .post(api_url + "/api/admin/profile", profile, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: IS_LOADING, payload: false });
        toast.success("Profile updated");
        dispatch({ type: ADMIN_PROFILE_DATA, payload: res.data.data.admin });
      }
    })
    .catch((err) => console.log(err));
};





/* ------------------------------------------------------------------------------------- */

// Static Content

export const postFAQ = (text, token) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });

  axios
    .post(api_url + `/api/admin/faq/post`, text, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: IS_LOADING, payload: false });
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const updateFAQ = (faq, token) => (dispatch) => {
 
  axios
    .put(api_url + `/api/admin/faq/update`, faq, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
      //  dispatch({ type: IS_LOADING, payload: false });
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const postSubFAQ = (text, token) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });

  axios
    .post(api_url + `/api/admin/faq/subfaq/post`, text, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: IS_LOADING, payload: false });
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const allFAQ = (token, page, limit) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/faq/all/${page}/${limit}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: FAQ,
          payload: res.data.data.faq,
        });
      }

      sessionStorage.setItem("total_faq", res.data.data.all_faq);
    })
    .catch((err) => console.log(err));
};

export const getFAQ = (id, token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/faq/get/${id}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: SINGLE_FAQ,
          payload: res.data.data.faq,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const deleteFAQ = (id, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/faq/delete`,
      { id },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const searchFAQ = (query, token) => (dispatch) => {
  console.log(token);
  axios
    .get(api_url + `/api/admin/faq/search?query=${query}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: FAQ,
          payload: res.data.data.faq,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const postAbout = (text, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/about/post`,
      { text },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
        dispatch({
          type: ABOUT,
          payload: res.data.data.about,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getAbout = (token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/about/get`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: ABOUT,
          payload: res.data.data.about,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const postHelp = (text, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/help/post`,
      { text },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
        dispatch({
          type: HELP,
          payload: res.data.data.help,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getHelp = (token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/help/get`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: HELP,
          payload: res.data.data.help,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const postTerm = (text, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/term/conditions/post`,
      { text },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
        dispatch({
          type: TERM,
          payload: res.data.data.term,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getTerm = (token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/term/conditions/get`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: TERM,
          payload: res.data.data.term,
        });
      }
    })
    .catch((err) => console.log(err));
};


/* ------------------------------------------------------------------------------------- */

//  Subscription

export const addSubscription = (subscription, token) => (dispatch) => {
  axios
    .post(`${api_url}/api/admin/subscription/add`, subscription, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const allSubscriptions = (token, page, limit) => (dispatch) => {
  axios
    .get(`${api_url}/api/admin/subscription/all/${limit}/${page}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: ALL_SUBSCRIPTIONS,
          payload: res.data.data.plans,
        });

        sessionStorage.setItem("total_doctor_plans", res.data.data.all_plans);
      }
    })
    .catch((err) => console.log(err));
};

export const getSubscription = (id, token) => (dispatch) => {
  axios
    .get(`${api_url}/api/admin/subscription/get/${id}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_SUBSCRIPTION,
          payload: res.data.data.plan,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const updateSubscription = (subscription, token) => (dispatch) => {
  axios
    .post(`${api_url}/api/admin/subscription/update`, subscription, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const searchSubscription = (query, token) => (dispatch) => {
  axios
    .get(`${api_url}/api/admin/subscription/search?query=${query}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: ALL_SUBSCRIPTIONS,
          payload: res.data.data.plans,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const deleteSubscription = (id, token) => (dispatch) => {
  axios
    .post(
      `${api_url}/api/admin/subscription/delete`,
      { id },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

/* ------------------------------------------------------------------------------------- */





/* ------------------------------------------------------------------------------------- */

// Settings

export const changePassword = (oldPass, newPass, token, history) => (
  dispatch
) => {
  axios
    .post(
      api_url + `/api/admin/change/password`,
      { currentPassword: oldPass, newPassword: newPass },
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


/* ------------------------------------------------------------------------------------- */

// Dashboard

export const dashboardStats = (token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/dashboard/stats`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        let {
          patients,
          doctors,
          psychologist,
          fitnessCoach,
          appointments,
        } = res.data.data;

        dispatch({
          type: DASHBOARD_STATS,
          patients,
          doctors,
          psychologist,
          fitnessCoach,
          appointments,
        });
      }
    })
    .catch((err) => console.log(err));
};


export const getCaptain = (captainId, token) => (dispatch) => {
  console.log("getCaptain called")
  axios
    .post(
      api_url +
        `/api/captain/get/captainById`, {captainId},
     
    )
    .then((res) => {
      console.log("res==", res)
      if (res.data.success) {
        dispatch({
          type: GET_STAFF,
          captainInfo: res.data.data.user,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const unblockWalker = (walker_id, token) => (
  dispatch
) => {
  axios
    .get(
      api_url +
        `/api/walker/unblock?id=${walker_id}`,
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const blockWalker = (walker_id, token) => (dispatch) => {
  console.log(walker_id);
  axios
    .get(
      api_url +
        `/api/doctor/block?id=${walker_id}`,
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};





export const addAbout = (text, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/cms/about/update`,
      { about: text },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};
export const addPolicy = (text, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/cms/policy/update`,
      { policy: text },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const addTerms = (text, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/cms/terms/update`,
      { terms: text },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};
export const getCMS = (token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/cms/get`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);

      if (res.data.success) {
        dispatch({ type: GET_CMS, payload: res.data.data.cms });
      }
    })
    .catch((err) => console.log(err));
};

export const getAllManagers = (token, page, limit) => (dispatch) => {
  let pageNumber = page;
  let pageLimit = limit;

  axios
    .get(api_url + `/api/manager/get/all/manager/${pageLimit}/${pageNumber}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: GET_MANAGERS, payload: res.data.data.managers });
        sessionStorage.setItem("total_managers", res.data.data.managers.length);
      }
    })
    .catch((err) => console.log(err));
};

export const unblockManager = (manager_id, token) => (dispatch) => {
  axios
    .get(api_url + `/api/manager/unblock/${manager_id}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: GET_MANAGERS, payload: res.data.data.managers });
        sessionStorage.setItem("total_managers", res.data.data.managers.length);
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const deleteManager = (id, token) => (dispatch) => {
  axios
    .post(
      api_url + "/api/admin/manager/delete",
      { id },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.error) {
        return toast.error(res.data.error);
      }
      if (res.data.success) {
        return toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};
export const getManager = (manager_id, token) => (dispatch) => {
  axios
    .post(api_url + `/api/manager/get/profile`, {manager_id}, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: GET_MANAGER,
          managerInfo: res.data.data.manager,
          staffs: res.data.data.staff,
          vessels: res.data.data.vessel,
        });
      }
    })
    .catch((err) => console.log(err));
};
export const updateManager = (manager, token) => (dispatch) => {
  axios
    .put(api_url + "/api/manager/edit/profile", manager, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        return toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

//Captains
export const getAllCaptains = (token, page, limit) => (
  dispatch
) => {
  let pageNumber = page;
  let pageLimit = limit;

  axios
    .get(
      api_url +
        `/api/admin/get/staffs/${pageLimit}/${pageNumber}`,
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        console.log("res dat===", res.data)
        sessionStorage.setItem("total_captains", res.data.data.staffs.length);
        dispatch({ type: GET_STAFFS, payload: res.data.data.staffs });
      }
    })
    .catch((err) => console.log(err));
};

//BLOG----------------------------------------------------------------
export const postBlog = (text, token) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });

  axios
    .post(api_url + `/api/admin/blog/post`, text, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: IS_LOADING, payload: false });
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const updateBlog = (blog, token) => (dispatch) => {
 
  axios
    .put(api_url + `/api/admin/blog/update`, blog, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({ type: IS_LOADING, payload: false });
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};


export const allBlog = (token, page, limit) => (dispatch) => {
  console.log("all blog")
  axios
    .get(api_url + `/api/admin/blog/all/${page}/${limit}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: BLOG,
          payload: res.data.data.blog,
        });
      }

      sessionStorage.setItem("total_blog", res.data.data.all_blog);
    })
    .catch((err) => console.log(err));
};

export const getBlog = (id, token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/blog/get/${id}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: SINGLE_BLOG,
          payload: res.data.data.blog,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const deleteBlog = (id, token) => (dispatch) => {
  axios
    .post(
      api_url + `/api/admin/blog/delete`,
      { id },
      {
        headers: { "x-access-token": token },
      }
    )
    .then((res) => {
      if (res.data.success) {
        toast.success(res.data.msg);
      }
    })
    .catch((err) => console.log(err));
};

export const searchBlog = (query, token) => (dispatch) => {
  axios
    .get(api_url + `/api/admin/blog/search?query=${query}`, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: Blog,
          payload: res.data.data.faq,
        });
      }
    })
    .catch((err) => console.log(err));
};
