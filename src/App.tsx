import { Outlet } from "react-router-dom";
import DiscordServerList from "./components/server/server-list-item";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { serverDataMock } from "./components/server/server-mock";

import { Toaster } from "react-hot-toast";
import { socket } from "./socket/socket";

function App() {
  const [nodeChoosen, setNodeChoosen] = useState<string>("");

  // socket part
  const [isConnect, setIsConnect] = useState<boolean>(false);

  // call video part
  const [joined, setJoined] = useState<boolean>(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Frontend connected");
      setIsConnect(true);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnect");
      setIsConnect(false);
    });

    socket.on("disconnect", (reason, description) => {
      console.log(reason, description);
      socket.emit("Client has been offline");
      setIsConnect(false);
    });
  });

  return (
    <StyledDiscordPageContainer>
      <DiscordServerList
        nodeChoosen={nodeChoosen}
        setNodeChoosen={setNodeChoosen}
        dataSource={serverDataMock}
      />
      <Outlet context={{ userId: socket.id, joined, setJoined }} />
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
