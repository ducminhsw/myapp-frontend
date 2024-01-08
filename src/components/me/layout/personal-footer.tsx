import styled from "styled-components";
import FooterUserInformation from "../../channel-v2/layout/footer-user-info";
import {
  DiscordHeadphoneIc,
  DiscordMuteIc,
  DiscordSettingIc,
} from "../../../assets/icons/discord-icon-channel";

const DiscordPersonalFooter = () => {
  return (
    <StyledPersonalFooter>
      <FooterUserInformation />
      <DiscordMuteIc />
      <DiscordHeadphoneIc />
      <DiscordSettingIc />
    </StyledPersonalFooter>
  );
};

export default DiscordPersonalFooter;

const StyledPersonalFooter = styled.div`
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
