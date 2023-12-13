import { AxiosResponse } from "axios";

export interface IBasicResponse<T> {
  code: number;
  message: string;
  data?: T;
}

export interface IDeleteRequestCreator<T> {
  data: T;
}

export type IPromiseAxiosReturnType<T> = Promise<
  AxiosResponse<IBasicResponse<T>>["data"]
>;
