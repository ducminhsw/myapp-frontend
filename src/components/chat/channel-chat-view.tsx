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

// const socket = io("http://localhost:3000");

// interface User {
//   _id: string;
//   online: boolean;
// }

const ScreenChannelChat = () => {
  // const [friendList, setFriendList] = useState<User[]>([]);

  // useEffect(() => {

  //   // notify userId online to other users
  //   socket.emit('user-connected', { userId: 123 })

  //   // modify status of user online exclude myself
  //   socket.on('user-connected', ({ userId }) => {
  //     const hasIdx = friendList.findIndex(user => user._id === userId);

  //     if (hasIdx === -1) return;

  //   })

  // }, [])

  return (
    <StyleTest>
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </StyleTest>
  );
};

export default ScreenChannelChat;
