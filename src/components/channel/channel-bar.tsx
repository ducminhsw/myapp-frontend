import styled from "styled-components";
import ChannelContentTop from "./channel-content-top/channel-content-top";
import ChannelContentBottom from "./channel-content-bottom/channel-content-bottom";

let arr = [];
const ChannelBar = () => {
  return (
    <>
      <StyledChannelBar>
        <ChannelContentTop />
        <ChannelContentBottom />
      </StyledChannelBar>
    </>
  );
};
export default ChannelBar;

const StyledChannelBar = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #971c1c;
  flex: 0 0 auto;
  color: black;
`;
