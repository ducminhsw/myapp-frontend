import styled from "styled-components";
import { DiscordPlusMark } from "../../../assets/icons/discord-icon-channel";

interface IChannelsHeader {
  headerName: string;
}

const ChannelsHeader = ({ headerName }: IChannelsHeader) => {
  return (
    <StyledChannelsHeader>
      <div>{headerName}</div>
      <div>
        <DiscordPlusMark />
      </div>
    </StyledChannelsHeader>
  );
};

export default ChannelsHeader;

const StyledChannelsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fa-solid {
    cursor: pointer;
  }
`;
