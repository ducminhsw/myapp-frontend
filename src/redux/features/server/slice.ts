import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDiscordChannel, IDiscordServer } from "./constant";

interface IServerState {
  loading: boolean;
  channelFromNowServer: IDiscordChannel[];
  servers: IDiscordServer[];
  nowChannel: IDiscordChannel;
  error: {
    addChannel: string;
    addServer: string;
    deleteChannel: string;
    deleteServer: string;
  };
}

const initialServerState: IServerState = {
  loading: false,
  channelFromNowServer: [],
  servers: [],
  nowChannel: {
    id: "",
    channelName: "",
    type: 0,
  },
  error: {
    addChannel: "",
    addServer: "",
    deleteChannel: "",
    deleteServer: "",
  },
};

export const handleCreateServer = createAsyncThunk(
  "server/create",
  async () => {}
);

export const serverSlice = createSlice({
  initialState: initialServerState,
  name: "server",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase;
  },
});
