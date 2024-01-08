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
  height: 30px;

  &: hover {
    cursor: pointer;
  }

  .fa-solid {
    cursor: pointer;
  }

  div {
    margin-right: 10px;
    font-size: 12px;
    font-weight: 500;
  }

  div:first-child {
    margin-right: 0px;
    margin-left: 10px;
  }
`;
