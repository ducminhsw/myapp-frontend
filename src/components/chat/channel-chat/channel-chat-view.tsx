import styled from "styled-components";
import ChatBody from "./chat-body";
import ChatHeader from "./chat-header";
import ChatInput from "./chat-input";
import { IDiscordChannel } from "../../../redux/features/server/constant";

interface Props {
  textMessage: string[];
  choosenChannel: IDiscordChannel;
}

const ScreenChannelChat = ({ textMessage, choosenChannel }: Props) => {
  return (
    <StyleTest>
      <ChatHeader choosenChannel={choosenChannel} />
      <ChatBody textMessage={textMessage} />
      <ChatInput />
    </StyleTest>
  );
};

export default ScreenChannelChat;

const StyleTest = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #2f3136;
  height: 100vh;
`;
