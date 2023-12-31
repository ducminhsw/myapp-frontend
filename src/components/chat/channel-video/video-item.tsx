import styled from "styled-components";

interface IDiscordVideoStream {
  srcObject: string;
  username: string;
}

const DiscordVideoFrameItem = ({
  srcObject,
  username,
}: IDiscordVideoStream) => {
  const handleClickUserStream = () => {};
  return (
    <StyledVideoBlock onClick={handleClickUserStream}>
      <StyledVideoFrame srcObject={srcObject || "none"} />
      <StyledVideoBar>{username || "Hello World"}</StyledVideoBar>
    </StyledVideoBlock>
  );
};

export default DiscordVideoFrameItem;

const StyledVideoBlock = styled.div`
  position: relative;
`;

// golden ratio
const StyledVideoFrame = styled.video.attrs<{ srcObject?: string }>(
  (props) => ({
    srcObject: props.srcObject || undefined,
  })
)`
  height: 160px;
  width: 258.88px;
  border-radius: 12px;
  background-color: orange;
`;

const StyledVideoBar = styled.div`
  position: absolute;
  border-bottom-radius: 12px;
  width: 100%;
  height: 20px;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  color: white;
`;
