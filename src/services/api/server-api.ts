import { Server } from "../../components/server/server-constant.ts";
import axios from "../../utils/customize-axios.tsx";
import {
  IDeleteRequestCreator,
  IPromiseAxiosReturnType,
} from "../constant/service-constant.ts";

interface IServerShareParams {
  userId: string;
}

interface IServerCreationData extends IServerShareParams {
  email: string;
  verified: boolean;
  typeServer: number;
}

interface IDeleteServerParams {}

const createServer = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> => axios.post(`api/v1/server/server`, data);

// get infomation of the server: participants, head of server, createAt
const getServerInformation = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> => axios.post(`api/v1/server`, data);

// get list of channels in side the server, and first 100msg of the first text channel
const getChannelsOfServer = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> => axios.post(`api/v1/server`, data);

// get specific channel in the choosen server
const getChannelInServerInfo = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> => axios.post(`api/v1/server`, data);

// working on it
const editServerInformation = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> => axios.put(`api/v1/server`, data);

// some user request to join the server
const requestJoinServer = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/on`, data);

// accept
const acceptUserJoin = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/accept`, data);

const requestLeaveServer = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/off`, data);

const resignServerPosition = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/resign`, data);

const deleteUserInServer = (
  data: IDeleteRequestCreator<IDeleteServerParams>
): IPromiseAxiosReturnType<null> =>
  axios.delete(`api/v1/server/server/target`, data);

export {
  createServer,
  getServerInformation,
  getChannelsOfServer,
  getChannelInServerInfo,
  editServerInformation,
  requestJoinServer,
  acceptUserJoin,
  requestLeaveServer,
  resignServerPosition,
  deleteUserInServer,
};
