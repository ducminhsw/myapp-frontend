import styled from "styled-components";
import FooterUserInformation from "./footer-user-info";
import {
  DiscordHeadphoneIc,
  DiscordMuteIc,
} from "../../../assets/icons/discord-icon-channel";

const DiscordChannelColumnFooter = () => {
  return (
    <StyledChannelColumnFooter>
      <FooterUserInformation />
      <DiscordMuteIc />
      <DiscordHeadphoneIc />
    </StyledChannelColumnFooter>
  );
};

export default DiscordChannelColumnFooter;

const StyledChannelColumnFooter = styled.div`
  width: 100%;
  height: 48px;
  background-color: #232428;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .fa-solid:hover {
    cursor: pointer;
  }
`;
