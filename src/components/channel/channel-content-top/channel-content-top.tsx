import React from "react";
import styled from "styled-components";

export default function ChannelContentTop() {
  return (
    <StyledContentTop>
      <StyledContentTopScroll>
        <div>Máy chủ của Văn</div>
        <StyledButton>Máy chủ của Văn</StyledButton>
        <StyledChat>
          <div>
            <i className="fa-solid fa-angle-down"></i> KÊNH CHAT
          </div>
          <StyledButton>
            <span># chung</span>
            <span>+</span>
          </StyledButton>
        </StyledChat>
        <StyledVoice>
          <div>
            <i className="fa-solid fa-angle-down"></i> KÊNH VOICE
          </div>
          <StyledButton>
            <span># chung</span>
            <span>+</span>
          </StyledButton>
          <div>
            <StyledButton>
              <i className="fa-solid fa-volume-high"></i> General
            </StyledButton>
          </div>
        </StyledVoice>
      </StyledContentTopScroll>
    </StyledContentTop>
  );
}

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

const StyledButton = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #297fb8;
  }
`;
