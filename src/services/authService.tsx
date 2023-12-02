import axios from "../utils/axiosCustomize.tsx";
import { AxiosResponse } from "axios";
type TypeRegister = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
};
type TypeLogin = {
  email: string;
  password: string;
};
type BasicResponse<T> = {
  code: number;
  message: string;
  data?: T;
};
type DataLogin = {
  userCredentials: {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    friends: string;
    token: string;
  };
};
const handleUserRegister = (
  data: TypeRegister,
): Promise<AxiosResponse<BasicResponse<null>>["data"]> => axios.post(`api/v1/auth/register`, data);

const handleUserLogin = (
  data: TypeLogin,
): Promise<AxiosResponse<BasicResponse<DataLogin>>["data"]> =>
  axios.post(`api/v1/auth/login`, data);

export { handleUserLogin, handleUserRegister };
