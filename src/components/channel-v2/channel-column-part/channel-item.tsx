import styled from "styled-components";
import { DiscordChannelItemIc } from "../../../assets/icons/discord-icon-channel";
import { Dispatch, SetStateAction } from "react";
import { CHANNEL_TYPES } from "../channel-constant";
import { IDiscordChannel } from "../../../redux/features/server/constant";

export interface IDiscordChannelItem {
  type: number;
  choosenChannel: string;
  id: string;
  channelName: string;
  setChoosen: Dispatch<SetStateAction<IDiscordChannel>>;
}

const DiscordChannelItem = ({
  type,
  choosenChannel,
  id,
  channelName,
  setChoosen,
}: IDiscordChannelItem) => {
  const handleClickChannel = () => {
    const thisChannel: IDiscordChannel = {
      id: id,
      channelName,
      type: type,
    };
    setChoosen(thisChannel);
    if (type === CHANNEL_TYPES.TEXT) {
      // dispatch action call api to get text message
    }
    if (type === CHANNEL_TYPES.VOICE) {
      // dispatch action call api to join call video
    }
  };

  return (
    <StyledChannelItem
      onClick={handleClickChannel}
      $isActive={id === choosenChannel}
    >
      <StyledDiscordChannelItemIc />
      <StyledChannelName>{channelName}</StyledChannelName>
    </StyledChannelItem>
  );
};

export default DiscordChannelItem;

const StyledChannelItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  background-color: ${(props) => (props.$isActive ? "#3f4248" : "#2b2d31")};
  color: ${(props) => (props.$isActive ? "#f2f3f5" : "#80848e")};
  align-items: center;
  height: 30px;
  width: 95%;
  box-sizing: border-box;
  padding-left: 10px;
  align-self: center;
  border-radius: 5px;
  &: hover {
    cursor: pointer;
    background-color: #3f4248;
    color: white;
  }
`;

const StyledDiscordChannelItemIc = styled(DiscordChannelItemIc)``;

const StyledChannelName = styled.div`
  margin-left: 7px;
`;
