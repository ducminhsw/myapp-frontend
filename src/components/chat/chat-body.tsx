import MessageBody from "./block-message-body";
import styled from "styled-components";

const StyleBody = styled.div`
  & {
    flex: 1;
    padding: 10px 20px;
    overflow-y: scroll;
  }
`;
const ChatBody = () => {
  return (
    <StyleBody>
      <MessageBody />
      <MessageBody />
      <MessageBody />
      <MessageBody />
      <MessageBody />
      <MessageBody />
      <MessageBody />
      <MessageBody />
    </StyleBody>
  );
};

export default ChatBody;
