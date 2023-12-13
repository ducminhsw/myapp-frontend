import axios from "axios";
import { IPromiseAxiosReturnType } from "../constant/service-constant";

interface IGetUserInformationRequest {
  userId: string;
  email: string;
}

interface IGetUserInformationResponse {
  role: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  dateOfBirth: string;
  storyNow: string;
}

export const getUserProfile = (
  data: IGetUserInformationRequest
): IPromiseAxiosReturnType<IGetUserInformationResponse> => {
  return axios.post(`api/v1/auth/register`, data);
};
