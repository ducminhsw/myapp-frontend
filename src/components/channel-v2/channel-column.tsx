import styled from "styled-components";
import DiscordChannelColumnHeader from "./channel-column-part/header";
import DiscordChannelColumnFooter from "./channel-column-part/footer";
import DiscordChannelColumnBody from "./channel-column-part/body";
import { useEffect, useState } from "react";
import { CHANNEL_TYPES } from "./channel-constant";
import ScreenChannelChat from "../chat/channel-chat/channel-chat-view";
import DiscordVideoCallList from "../chat/channel-video/channel-video-view";
import { IDiscordChannel } from "../../redux/features/server/constant";

// const constrains = {
//   audio: false,
//   video: {
//     width: {
//       min: 640,
//       max: 1920,
//     },
//     height: {
//       min: 400,
//       height: 1080,
//     },
//   },
// };

const MockDiscordChannel: IDiscordChannel[] = [
  {
    id: "mockednumber1",
    channelName: "general",
    type: CHANNEL_TYPES.TEXT,
  },
  {
    id: "mockednumber2",
    channelName: "general 2",
    type: CHANNEL_TYPES.TEXT,
  },
  {
    id: "mockednumber3",
    channelName: "General",
    type: CHANNEL_TYPES.VOICE,
  },
];

const DiscordChannelPart = () => {
  const [choosenChannel, setChoosenChannel] = useState<IDiscordChannel>(
    MockDiscordChannel[0]
  );
  const [textMessage, setTextMessage] = useState<string[]>([]);
  useEffect(() => {}, []);
  useEffect(() => {
    // call api => get all the channel data
    // from channel data set the message to the fe
    setTextMessage([""]);
  }, [choosenChannel]);
  return (
    <StyledDiscordChannelView>
      <StyledChannelColumn>
        <DiscordChannelColumnHeader />
        <DiscordChannelColumnBody
          channelDataSource={MockDiscordChannel}
          choosenChannel={choosenChannel}
          setChoosenChannel={setChoosenChannel}
        />
        <DiscordChannelColumnFooter />
      </StyledChannelColumn>
      {choosenChannel?.type === CHANNEL_TYPES.TEXT ? (
        <ScreenChannelChat
          choosenChannel={choosenChannel}
          textMessage={textMessage}
        />
      ) : (
        <DiscordVideoCallList />
      )}
    </StyledDiscordChannelView>
  );
};

export default DiscordChannelPart;

const StyledDiscordChannelView = styled.div`
  width: 100%;
  display: flex;
  background: #2b2d31;
`;

const StyledChannelColumn = styled.div`
  width: 240px;
  background-color: grey;
  display: flex;
  flex-direction: column;
`;
