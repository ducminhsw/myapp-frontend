import styled from "styled-components";
import DiscordVideoFrameItem from "./video-item";

const DiscordVideoCallList = () => {
  return (
    <StyledVideoFrameList>
      <StyledListContainer>
        <DiscordVideoFrameItem />
        <DiscordVideoFrameItem />
        <DiscordVideoFrameItem />
        <DiscordVideoFrameItem />
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
