import styled from "styled-components";
import DiscordVideoFrameItem from "./video-item";
import { useEffect, useState } from "react";

interface IDiscordVideoStream {
  srcObject: string;
  username: string;
}

const DiscordVideoCallList = () => {
  const [streams, setStreams] = useState<IDiscordVideoStream[]>();

  useEffect(() => {
    setStreams([]);
  }, []);

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
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
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
