import styled from "styled-components";
let arr = [];
const ChannelBar = () => {
  return (
    <>
      <StyledChannelBar>
        <StyledContentTop>
          <StyledContentTopScroll>
            <div>Máy chủ của Văn</div>
            <StyledButton>Máy chủ của Văn</StyledButton>
            <StyledChat>
              <div>KÊNH CHAT</div>
              <StyledButton>
                <span># chung</span>
                <span>+</span>
              </StyledButton>
            </StyledChat>
            <StyledVoice>
              <div>KÊNH VOICE</div>
              <StyledButton>
                <span># chung</span>
                <span>+</span>
              </StyledButton>
              <div>
                <StyledButton>+ General</StyledButton>
              </div>
            </StyledVoice>
          </StyledContentTopScroll>
        </StyledContentTop>
        <StyledContentBottom>dat</StyledContentBottom>
      </StyledChannelBar>
    </>
  );
};

const StyledChat = styled.div``;
const StyledVoice = styled.div``;
const StyledContentTopScroll = styled.div`
  height: 320px;
`;

const StyledContentTop = styled.div`
  padding: 10px;
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
`;
const StyledContentBottom = styled.div`
  background-color: yellow;
`;
const StyledChannelBar = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #971c1c;
  flex: 0 0 auto;
`;
const StyledButton = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #297fb8;
  }
`;
export default ChannelBar;
