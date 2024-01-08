import styled from "styled-components";
import DiscordChannelItem from "../channel-column-part/channel-item";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ChannelsHeader from "../channel-column-part/channel-header";
import { CHANNEL_HEADER_TEXT, CHANNEL_TYPES } from "../channel-constant";
import { IDiscordChannel } from "../../../redux/features/server/constant";

// export interface IDiscordChannel {
//   channelId: string;
//   channelName: string;
//   channelType: number;
// }

interface Props {
  channelDataSource: IDiscordChannel[];
  choosenChannel: IDiscordChannel;
  setChoosenChannel: Dispatch<SetStateAction<IDiscordChannel>>;
}

const DiscordChannelColumnBody = ({
  channelDataSource,
  choosenChannel,
  setChoosenChannel,
}: Props) => {
  const [textChannel, setTextChannel] = useState<IDiscordChannel[]>([]);
  const [voiceChannel, setVoiceChannel] = useState<IDiscordChannel[]>([]);

  useEffect(() => {
    setChoosenChannel(channelDataSource[0]);
    setTextChannel(
      channelDataSource.filter((item) => item.type === CHANNEL_TYPES.TEXT)
    );
    setVoiceChannel(
      channelDataSource.filter((item) => item.type === CHANNEL_TYPES.VOICE)
    );
  }, [channelDataSource]);

  return (
    <StyledChannelColumnBody>
      <ChannelsHeader headerName={CHANNEL_HEADER_TEXT.TEXT} />
      {textChannel &&
        textChannel.length &&
        textChannel.map((item: IDiscordChannel, index: number) => {
          return (
            <DiscordChannelItem
              key={index}
              choosenChannel={choosenChannel.id}
              setChoosen={setChoosenChannel}
              {...item}
            />
          );
        })}
      <ChannelsHeader headerName={CHANNEL_HEADER_TEXT.VOICE} />
      {voiceChannel &&
        voiceChannel.length &&
        voiceChannel.map((item: IDiscordChannel, index: number) => {
          return (
            <DiscordChannelItem
              key={index}
              choosenChannel={choosenChannel.id}
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
  background-color: #2b2d31;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
