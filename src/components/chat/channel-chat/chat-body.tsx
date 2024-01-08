import { useEffect, useRef, useState } from "react";
import MessageBody from "./block-message-body";
import styled from "styled-components";

interface Props {
  textMessage: string[];
}

const ChatBody = ({ textMessage }: Props) => {
  const [messages, setMessages] = useState([]);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    // Scroll to the bottom when messages change or component mounts
    scrollToBottom();
  }, []);

  useEffect(() => {
    setMessages([]);
  }, [textMessage]);
  console.log(messages);

  return (
    <StyleBody ref={chatRef}>
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

const StyleBody = styled.div`
  flex: 1;
  padding: 10px 0;
  overflow-y: scroll;
`;
