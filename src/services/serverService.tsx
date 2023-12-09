import { Server } from "../components/servers/Server.type.ts";
import axios from "../utils/axiosCustomize.tsx";
import { AxiosResponse } from "axios";
type BasicResponse<T> = {
  code: number;
  message: string;
  data?: T;
};
type InputData = {
  userId: string;
  email: string;
  verified: boolean;
  typeServer: number;
  token: string;
};
const createServer = (data: InputData): Promise<AxiosResponse<BasicResponse<Server>>["data"]> =>
  axios.post(`api/v1/server/new`, data);

export { createServer };
