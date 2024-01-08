import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDiscordChannel, IDiscordServer } from "./constant";

interface IServerState {
  loading: boolean;
  serverIned: string;
  channelsInServer: IDiscordChannel[];
  textChannelJoined: string;
  voiceChannelJoined: string;
  serverList: IDiscordServer[];
}

const initialServerState: IServerState = {
  loading: false,
  serverIned: "",
  serverList: [],
  channelsInServer: [],
  textChannelJoined: "",
  voiceChannelJoined: "",
};

export const serverSlice = createSlice({
  initialState: initialServerState,
  name: "server",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase;
  },
});

// create server
export const handleCreateServer = createAsyncThunk(
  "server/create-server",
  async () => {}
);

// create invitation
export const handleCreateInvitationToServer = createAsyncThunk(
  "server/create-invitation",
  async () => {}
);

// enter server with invitation
export const handleEnterServerWithInvitation = createAsyncThunk(
  "server/enter-server-invitation",
  async () => {}
);

// get server info
export const handleGetServerInformation = createAsyncThunk(
  "server/get-server-information",
  async () => {}
);

// request to join server
export const handleRequestToJoinServer = createAsyncThunk(
  "server/request-join-server",
  async () => {}
);

// accept/decline user to join server
export const handleAnswerJoinServerRequest = createAsyncThunk(
  "server/accept-join-request",
  async () => {}
);

// user leave server
export const handleLeaveServer = createAsyncThunk(
  "server/accept-join-request",
  async () => {}
);

// ban user from server
export const handleBanUserFromServer = createAsyncThunk(
  "server/accept-join-request",
  async () => {}
);
