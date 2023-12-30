import { useState } from "react";
import styled from "styled-components";
import "./channel-content-top.modules.css";
import {
  DiscordAngleDownIc,
  DiscordAngleRightIc,
} from "../../../assets/icons/discord-icon-channel";
export default function ChannelContentTop() {
  const [isChatChannel, setIsChatChannel] = useState<boolean>(true);
  const [isChatVoice, setIsChatVoice] = useState<boolean>(true);

  return (
    <StyledContentTop>
      <StyledContentTopScroll>
        <div className="nameServer ">Máy chủ của Văn</div>
        <StyledButton className="textServer">Máy chủ của Văn</StyledButton>
        <StyledChat>
          <div
            className="styledChat"
            onClick={() => setIsChatChannel((prev) => !prev)}
          >
            {isChatChannel ? <DiscordAngleDownIc /> : <DiscordAngleRightIc />}
            <span>KÊNH CHAT</span>
          </div>
          {isChatChannel && (
            <StyledButton>
              <span># chung</span>
              <span>+</span>
            </StyledButton>
          )}
        </StyledChat>
        <StyledVoice>
          <div
            className="styledChat"
            onClick={() => setIsChatVoice((prev) => !prev)}
          >
            {isChatVoice ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-chevron-right"></i>
            )}
            KÊNH VOICE
          </div>
          {isChatVoice && (
            <div>
              <StyledButton>
                <span># Chung</span>
                <span>+</span>
              </StyledButton>
              <StyledButton>
                <i className="fa-solid fa-volume-high"></i> General
              </StyledButton>
            </div>
          )}
        </StyledVoice>
      </StyledContentTopScroll>
    </StyledContentTop>
  );
}

const StyledChat = styled.div`
  padding-top: 10px;
`;
const StyledVoice = styled.div`
  padding-top: 10px;
`;
const StyledContentTopScroll = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
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
    background-color: var(--color-btn-hover);
    color: var(--color-text-hover);
  }
`;
