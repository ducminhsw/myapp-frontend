import styled from "styled-components";
import { Outlet, useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import ChannelContentTop from "./channel-content-top/channel-content-top";
import ChannelContentBottom from "./channel-content-bottom/channel-content-bottom";
import { RtpCapabilities } from "mediasoup-client/lib/RtpParameters";

interface IChannelOutletContext {
  userId: string;
  joined: boolean;
  setJoined: Dispatch<SetStateAction<boolean>>;
}

const constrains = {
  audio: false,
  video: {
    width: {
      min: 640,
      max: 1920,
    },
    height: {
      min: 400,
      height: 1080,
    },
  },
};

const DiscordChannelPart = () => {
  const room = "mediasoup";
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [otherStreams, setOtherStreams] = useState<MediaStream>();
  const [rtpCapabilities, setRtpCapabilities] = useState<RtpCapabilities>();
  const { userId, joined, setJoined } =
    useOutletContext<IChannelOutletContext>();

  return (
    <StyledChannelBar>
      <ChannelContentTop />
      <ChannelContentBottom />
      <Outlet context={{ localStream, joined, setJoined, otherStreams }} />
    </StyledChannelBar>
  );
};
export default DiscordChannelPart;

const StyledChannelBar = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-layout-md);
  flex: 0 0 auto;
  color: var(--color-text);
`;
