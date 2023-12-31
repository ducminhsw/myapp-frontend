import styled from "styled-components";
import DiscordVideoFrameItem from "./video-item";
import { useEffect, useState } from "react";

interface IDiscordVideoStream {
  srcObject: string;
  username: string;
}

const MockDiscordVideoStreams = [
  {
    srcObject: "",
    username: "hejfnerj",
  },
  {
    srcObject: "",
    username: "nvjfvndfnvj",
  },
  {
    srcObject: "",
    username: "njkenrjer",
  },
];

const DiscordVideoCallList = () => {
  const [streams, _setStreams] = useState<IDiscordVideoStream[]>(
    MockDiscordVideoStreams
  );

  // useEffect(() => {
  //   setStreams([]);
  // }, []);

  return (
    <StyledVideoFrameList>
      <StyledListContainer>
        {streams?.map((stream) => {
          console.log(stream.username);
          return (
            <DiscordVideoFrameItem
              srcObject={stream.srcObject}
              username={stream.username}
            />
          );
        })}
      </StyledListContainer>
    </StyledVideoFrameList>
  );
};

export default DiscordVideoCallList;

const StyledVideoFrameList = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const StyledListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
