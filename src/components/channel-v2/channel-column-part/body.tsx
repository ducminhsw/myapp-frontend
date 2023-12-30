import styled from "styled-components";
import DiscordChannelItem from "./channel-item";
import { useEffect, useState } from "react";
import ChannelsHeader from "./channel-header";
import { CHANNEL_HEADER_TEXT, CHANNEL_TYPES } from "../channel-constant";

export interface IDiscordChannel {
  channelId: string;
  channelName: string;
}

interface Props {
  channelDataSource: IDiscordChannel[];
}

const DiscordChannelColumnBody = ({ channelDataSource }: Props) => {
  const [choosenChannel, setChoosenChannel] = useState<string>(
    channelDataSource?.[0]?.channelId
  );

  useEffect(() => {
    setChoosenChannel(channelDataSource?.[0]?.channelId);
  }, [channelDataSource]);

  return (
    <StyledChannelColumnBody>
      <ChannelsHeader headerName={CHANNEL_HEADER_TEXT.TEXT} />
      {channelDataSource &&
        channelDataSource.length &&
        channelDataSource.map((item: IDiscordChannel, index: number) => {
          return (
            <DiscordChannelItem
              key={index}
              type={CHANNEL_TYPES.TEXT}
              choosenChannel={choosenChannel}
              setChoosen={setChoosenChannel}
              {...item}
            />
          );
        })}
      <ChannelsHeader headerName={CHANNEL_HEADER_TEXT.VOICE} />
      {channelDataSource &&
        channelDataSource.length &&
        channelDataSource.map((item: IDiscordChannel, index: number) => {
          return (
            <DiscordChannelItem
              key={index}
              type={CHANNEL_TYPES.VOICE}
              choosenChannel={choosenChannel}
              setChoosen={setChoosenChannel}
              {...item}
            />
          );
        })}
    </StyledChannelColumnBody>
  );
};

export default DiscordChannelColumnBody;

const StyledChannelColumnBody = styled.div`
  width: 100%;
  flex: 1;
`;
