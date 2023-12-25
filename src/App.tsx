import { Outlet } from "react-router-dom";
import DiscordServerList from "./components/server/server-list-item";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { serverDataMock } from "./components/server/server-mock";
import { Toaster } from "react-hot-toast";
import { socket } from "./socket/socket";

function App() {
  const [nodeChoosen, setNodeChoosen] = useState<string>("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Frontend connected");
    });
  });

  return (
    <StyledDiscordPageContainer>
      <DiscordServerList
        nodeChoosen={nodeChoosen}
        setNodeChoosen={setNodeChoosen}
        dataSource={serverDataMock}
      />
      <Outlet />
      <Toaster />
    </StyledDiscordPageContainer>
  );
}

const StyledDiscordPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export default App;
