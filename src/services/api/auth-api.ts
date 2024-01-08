import axios from "axios";
import { IFriend, IPromiseAxiosReturnType } from "../constant/service-constant";

const local = "http://localhost:3000";

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponse {
  message: string;
  code: number;
  data: {
    userBasicInfo: {
      role: string;
      userId: string;
      email: string;
      username: string;
      firstName: string;
      lastName: string;
      avatar: string;
      friends: IFriend[];
      phoneNumber: string;
      underServer: string;
      headOfServer: string;
      dateOfBirth: string;
      token: string;
    };
  };
}

export interface ISignUpRequest extends ISignInRequest {
  displayName: string;
  username: string;
  password: string;
  email: string;
  dateOfBirth: string;
}

export interface ISignUpResponse {}

export const signInRequest = async (
  data: ISignInRequest
): IPromiseAxiosReturnType<ISignInResponse> =>
  await axios.post(`${local}/api/v1/auth/login`, data);

export const signUpRequest = async (
  data: ISignUpRequest
): IPromiseAxiosReturnType<ISignUpResponse> =>
  await axios.post(`${local}/api/v1/auth/register`, data);
