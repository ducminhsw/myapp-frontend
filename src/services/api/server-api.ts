import axios from "../../utils/customize-axios.tsx";
import {
  IChannel,
  IDeleteRequestCreator,
  IPromiseAxiosReturnType,
  IUser,
} from "../constant/service-constant.ts";

interface IServerCreationRequest {
  userId: string;
  email: string;
  verified: boolean;
  typeServer: number;
}

interface IServerCreationResponse {
  title: string;
  headOfServer: IUser[];
  type: number;
  channels: {
    chatChannel: IChannel[];
    voiceChannel: IChannel[];
  };
  participants: IUser[];
  joinRequest: IUser[];
  muted: IUser[];
  banned: IUser[];
}

interface IGetServerInformationRequest {}

interface IGetServerInformationResponse extends IServerCreationResponse {}

interface IDeleteServerParams {}

const createServer = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<IServerCreationResponse> =>
  axios.post(`api/v1/server/server`, data);

// get infomation of the server: participants, head of server, createAt
const getServerInformation = (
  data: IGetServerInformationRequest
): IPromiseAxiosReturnType<IGetServerInformationResponse> =>
  axios.post(`api/v1/server`, data);

// get specific channel in the choosen server
const getChannelInServerInfo = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<Server> => axios.post(`api/v1/server`, data);

// working on it
const editServerInformation = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<Server> => axios.put(`api/v1/server`, data);

// some user request to join the server
const requestJoinServer = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/on`, data);

// accept
const acceptUserJoin = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/accept`, data);

const requestLeaveServer = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/off`, data);

const resignServerPosition = (
  data: IServerCreationRequest
): IPromiseAxiosReturnType<null> => axios.post(`api/v1/server/resign`, data);

const deleteUserInServer = (
  data: IDeleteRequestCreator<IDeleteServerParams>
): IPromiseAxiosReturnType<null> =>
  axios.delete(`api/v1/server/server/target`, data);

export {
  createServer,
  getServerInformation,
  getChannelInServerInfo,
  editServerInformation,
  requestJoinServer,
  acceptUserJoin,
  requestLeaveServer,
  resignServerPosition,
  deleteUserInServer,
};
