import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialServerState = {};

export const channelSlice = createSlice({
  initialState: initialServerState,
  name: "channel",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase;
  },
});

export const channelReducer = channelSlice.reducer;

// create server
export const handleCreateChannel = createAsyncThunk(
  "channel/create-channel",
  async () => {}
);

// delete server
export const handleDeleteChannel = createAsyncThunk(
  "channel/delete-channel",
  async () => {}
);

// delete server
export const handleGetChannelMessage = createAsyncThunk(
  "channel/delete-channel",
  async () => {}
);
