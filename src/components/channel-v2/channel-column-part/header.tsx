import { useState } from "react";
import styled from "styled-components";
import {
  DiscordAngleDownIc,
  DiscordXMark,
} from "../../../assets/icons/discord-icon-channel";

const DiscordChannelColumnHeader = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClickOptions = () => {
    setIsClick(!isClick);
  };

  return (
    <StyledChannelColumnHeader>
      <StyledWrapper>
        <StyledServerName>Server's Name</StyledServerName>
        <StyledServerOptions onClick={handleClickOptions}>
          {isClick ? <DiscordXMark /> : <DiscordAngleDownIc />}
        </StyledServerOptions>
      </StyledWrapper>
    </StyledChannelColumnHeader>
  );
};

export default DiscordChannelColumnHeader;

const StyledChannelColumnHeader = styled.div`
  width: 100%;
  height: 48px;
  background-color: #2b2d31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 16px;
`;

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledServerName = styled.div`
  margin-left: 7px;
`;
const StyledServerOptions = styled.div`
  margin-right: 7px;
`;
