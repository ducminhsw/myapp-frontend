import axios, { InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

instance.defaults.withCredentials = true;
// Add a request interceptor
instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const { code, message } = response.data;
    switch (code) {
      default: {
        toast.success(message);
      }
    }
    return response && response.data ? response.data : response;
  },
  function (error) {
    if (error.response.data && error.response.EC === -999) {
      window.location.href = "/";
    }

    const status = error.status;

    switch (status) {
      // bad request
      case 400: {
        toast.error("Error status 400");
        return Promise.reject(error);
      }

      case 401: {
        // window.location.href = "/login";
        toast.error("Error status 401");
        return Promise.reject(error);
      }

      // forbidden (permission related issues)
      case 403: {
        toast.error("Error status 403");
        return Promise.reject(error);
      }

      // not found
      case 404: {
        toast.error("Error status 404");
        return Promise.reject(error);
      }

      // conflict
      case 409: {
        toast.error("Error status 409");
        return Promise.reject(error);
      }

      // unprocessable
      case 422: {
        toast.error("Error status 422");
        return Promise.reject(error);
      }

      // generic api error (server related) unexpected
      default: {
        toast.error(`Error status ${error.response.data.EM}`);

        return Promise.reject(error);
      }
    }
  }
);
export default instance;
