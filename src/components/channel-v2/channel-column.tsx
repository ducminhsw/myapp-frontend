import styled from "styled-components";
import { Outlet, useOutletContext } from "react-router-dom";
import DiscordChannelColumnHeader from "./channel-column-part/header";
import DiscordChannelColumnFooter from "./channel-column-part/footer";
import DiscordChannelColumnBody, {
  IDiscordChannel,
} from "./channel-column-part/body";
import { useEffect } from "react";

// const constrains = {
//   audio: false,
//   video: {
//     width: {
//       min: 640,
//       max: 1920,
//     },
//     height: {
//       min: 400,
//       height: 1080,
//     },
//   },
// };

interface Props {
  channelDataSource: IDiscordChannel[];
}

const MockDiscordChannel: IDiscordChannel[] = [
  {
    channelId: "1121",
    channelName: "heoaaaaaaofekf",
  },
  {
    channelId: "1131",
    channelName: "heodsdsdasdekf",
  },
  {
    channelId: "1113",
    channelName: "heoasdasdofekf",
  },
];

const DiscordChannelPart = () => {
  const { channelDataSource } = useOutletContext<Props>();
  useEffect(() => {}, [channelDataSource]);
  return (
    <StyledDiscordChannelView>
      <StyledChannelColumn>
        <DiscordChannelColumnHeader />
        <DiscordChannelColumnBody
          channelDataSource={
            channelDataSource ? channelDataSource : MockDiscordChannel
          }
        />
        <DiscordChannelColumnFooter />
      </StyledChannelColumn>
      <Outlet />
    </StyledDiscordChannelView>
  );
};
export default DiscordChannelPart;

const StyledDiscordChannelView = styled.div`
  width: 100%;
  display: flex;
  background: white;
`;

const StyledChannelColumn = styled.div`
  width: 240px;
  background-color: grey;
  display: flex;
  flex-direction: column;
`;
