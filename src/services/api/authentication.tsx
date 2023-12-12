import axios from "../../utils/customize-axios.tsx";
import { IPromiseAxiosReturnType } from "../constant/service-constant.ts";

interface IRegisterParams {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
}

interface ILoginParams {
  email: string;
  password: string;
}

interface ILoginRegisterInformation {
  userCredentials: {
    role: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    underServer: string[];
    headOfServer: string[];
    dateOfBirth: string;
    verified: boolean;
    storyNow: {
      content: string;
      dateOfStory: Date;
    };
    stories: {
      content: string;
      dateOfStory: Date;
    }[];
    friends: {
        user: string,
        createAt: Date
    }[];
    banned: boolean;
    token: string;
  };
}

const handleUserRegister = (data: IRegisterParams): IPromiseAxiosReturnType<ILoginRegisterInformation> => {
  return axios.post(`api/v1/auth/register`, data);}

const handleUserLogin = (data: ILoginParams): IPromiseAxiosReturnType<ILoginRegisterInformation> => {
  return axios.post(`api/v1/auth/login`, data);
}

export { handleUserLogin, handleUserRegister };
