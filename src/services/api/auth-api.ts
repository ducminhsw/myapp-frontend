import axios from "axios";
import { IPromiseAxiosReturnType } from "../constant/service-constant";

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponse {}

export interface ISignUpRequest extends ISignInRequest {
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface ISignUpResponse {}

export const signInRequest = (
  data: ISignInRequest
): IPromiseAxiosReturnType<ISignInResponse> =>
  axios.post("api/v1/auth/login", data);

export const signUpRequest = (
  data: ISignUpRequest
): IPromiseAxiosReturnType<ISignUpResponse> =>
  axios.post("api/v1/auth/register", data);
