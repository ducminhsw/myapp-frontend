import { RootState } from "../../store";

export const getServerLoading = (state: RootState) =>
  state.serverReducer.loading;

export const setServerIned = (state: RootState) =>
  state.serverReducer.serverIned;

export const getServerList = (state: RootState) =>
  state.serverReducer.serverIned;

export const getChannelsInServer = (state: RootState) =>
  state.serverReducer.channelsInServer;

export const getTextChannelIned = (state: RootState) =>
  state.serverReducer.textChannelIned;

export const getVoiceChannelIned = (state: RootState) =>
  state.serverReducer.voiceChannelIned;
