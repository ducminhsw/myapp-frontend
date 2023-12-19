import styled from "styled-components";
import ChatBody from "./chat-body";
import ChatHeader from "./chat-header";
import ChatInput from "./chat-input";

const StyleTest = styled.div`
  & {
    display: flex;
    flex-direction: column;
    background-color: #2f3136;
    height: 100vh;
  }
`;
const ScreenChannelChat = () => {
  return (
    <StyleTest>
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </StyleTest>
  );
};

export default ScreenChannelChat;
