import axios from "axios";
import { IPromiseAxiosReturnType } from "../constant/service-constant";

interface IGetUserInformationRequest {
  userId: string;
  email: string;
}

export interface IGetUserInformationResponse {
  role?: string;
  email: string;
  username: string;
  displayName: string;
  password: string;
  dateOfBirth: string;
}

export const registerAccount = (
  data: IGetUserInformationRequest
): IPromiseAxiosReturnType<IGetUserInformationResponse> => {
  return axios.post(`api/v1/auth/register`, data);
};

