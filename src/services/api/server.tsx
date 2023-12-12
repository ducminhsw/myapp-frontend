import { Server } from "../../components/server/server.type.ts";
import axios from "../../utils/customize-axios.tsx";
import { IPromiseAxiosReturnType } from "../constant/service-constant.ts";

type InputData = {
  userId: string;
  email: string;
  verified: boolean;
  typeServer: number;
  token: string;
};

const createServer = (data: InputData): IPromiseAxiosReturnType<Server> =>
  axios.post(`api/v1/server/new`, data);

export { createServer };
