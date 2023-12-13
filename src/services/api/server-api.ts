import { Server } from "../../components/server/server.type.ts";
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
): IPromiseAxiosReturnType<Server> => axios.post(`api/v1/server/new`, data);

// pending
const deleteServer = (
  data: IDeleteRequestCreator<IDeleteServerParams>
): IPromiseAxiosReturnType<Server> =>
  axios.delete(`api/v1/server/:serverId`, data);

const getServerInformation = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> =>
  axios.post(`api/v1/server/:serverId`, data);

// pending
const editServerInformation = (
  data: IServerCreationData
): IPromiseAxiosReturnType<Server> =>
  axios.put(`api/v1/server/:serverId`, data);

const requestJoinServer = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> =>
  axios.post(`api/v1/server/:serverId/on`, data);

const acceptUserJoin = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> =>
  axios.post(`api/v1/server/:serverId/:targetUserId/accept`, data);

const requestLeaveServer = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> =>
  axios.post(`api/v1/server/:serverId/off`, data);

const resignServerPosition = (
  data: IServerCreationData
): IPromiseAxiosReturnType<null> =>
  axios.post(`api/v1/server/:serverId/resign`, data);

const deleteUserInServer = (
  data: IDeleteRequestCreator<IDeleteServerParams>
): IPromiseAxiosReturnType<null> =>
  axios.delete(`api/v1/server/:serverId/:targetUserId`, data);

export {
  createServer,
  deleteServer,
  getServerInformation,
  editServerInformation,
  requestJoinServer,
  acceptUserJoin,
  requestLeaveServer,
  resignServerPosition,
  deleteUserInServer,
};
