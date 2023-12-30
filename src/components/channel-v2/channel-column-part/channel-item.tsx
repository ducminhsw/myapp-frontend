import styled from "styled-components";
import { DiscordChannelItemIc } from "../../../assets/icons/discord-icon-channel";
import { Dispatch, SetStateAction } from "react";

export interface IDiscordChannelItem {
  type: number;
  choosenChannel: string;
  channelId: string;
  channelName: string;
  setChoosen: Dispatch<SetStateAction<string>>;
}

const DiscordChannelItem = ({
  // type,
  choosenChannel,
  channelId,
  channelName,
  setChoosen,
}: IDiscordChannelItem) => {
  const handleClickChannel = () => {
    setChoosen(channelId);
  };

  return (
    <StyledChannelItem
      onClick={handleClickChannel}
      $isActive={channelId === choosenChannel}
    >
      <DiscordChannelItemIc />
      <div>{channelName}</div>
    </StyledChannelItem>
  );
};

export default DiscordChannelItem;

const StyledChannelItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  background-color: ${(props) => (props.$isActive ? "#3f4248" : "white")};
  color: ${(props) => (props.$isActive ? "#f2f3f5" : "#80848e")};
  &: hover {
    cursor: pointer;
    background-color: rgba(44, 45, 49, 0.3);
    color: white;
  }
`;
