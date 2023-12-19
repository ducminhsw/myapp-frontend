import styled from "styled-components";
import DiscordVideoFrameItem from "./video-item";

const DiscordVideoCallList = () => {
  return (
    <StyledVideoFrameList>
      <DiscordVideoFrameItem />
      <DiscordVideoFrameItem />
      <DiscordVideoFrameItem />
    </StyledVideoFrameList>
  );
};

export default DiscordVideoCallList;

const StyledVideoFrameList = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
