import { Outlet, useNavigate } from "react-router-dom";
import DiscordServerList from "./components/server/server-list-item";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { serverDataMock } from "./components/server/server-mock";

import { Toaster } from "react-hot-toast";
import { socket } from "./socket/socket";
import { useSelector } from "react-redux";
import {
  authLoggedSuccess,
  authUserBasicInfo,
} from "./redux/features/auth/selector";
import { CompareWithStringify } from "./utils/utilsFunction";
import { useDispatch } from "react-redux";
import { getChannelsOfServer } from "./services/api/server-api";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logged = useSelector(authLoggedSuccess);
  const basicInfo = useSelector(authUserBasicInfo);

  const [serverChoosen, setServerChoosen] = useState<string>("");

  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("disconnect", () => {});

    socket.on("disconnect", () => {
      socket.emit("Client has been offline");
    });
  }, []);

  useEffect(() => {
    if (!logged || !basicInfo || CompareWithStringify(basicInfo, {}))
      navigate("/login");
  }, [logged, basicInfo, navigate]);

  useEffect(() => {
    if (serverChoosen === "@me") {
      navigate("@me");
    } else {
      dispatch(getChannelsOfServer(serverChoosen));
      navigate("channels");
    }
  }, [serverChoosen, navigate]);

  return (
    <StyledDiscordPageContainer>
      <DiscordServerList
        serverChoosen={serverChoosen}
        setServerChoosen={setServerChoosen}
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
