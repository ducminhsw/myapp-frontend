import styled from "styled-components";

const DiscordVideoFrameItem = () => {
  return <StyledVideoFrame />;
};

export default DiscordVideoFrameItem;

const StyledVideoFrame = styled.video`
  height: 60px;
  width: 100px;
  background-color: orange;
`;
