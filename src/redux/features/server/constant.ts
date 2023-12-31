export interface IDiscordServer {
  id: string;
  serverName: string;
  channelsInclude: IDiscordChannel[];
}

export interface IDiscordChannel {
  id: string;
  channelName: string;
  type: number;
}
