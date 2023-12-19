import styled from "styled-components";
import { GigaChad, TomHardy } from "../../../assets/images";
import ChannelContentInfo from "./channel-content-info";
import ChannelContentSetting from "./channel-content-setting";

export default function ChannelContentBottom() {
  return (
    <StyledContentBottom>
      <StyledServerItemContainer>
        <StyledServerImage src={GigaChad}></StyledServerImage>
      </StyledServerItemContainer>
      <ChannelContentInfo />
      <ChannelContentSetting />
    </StyledContentBottom>
  );
}

const StyledServerItemContainer = styled.div`
  width: 60px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledServerImage = styled.img.attrs<{ src?: string }>((props) => ({
  src: props.src || TomHardy,
}))`
  width: 48px;
  height: 48px;
  border-radius: ${(props) => "25px"};
  transition: border-radius 0.2s ease-in-out;
`;

const StyledContentBottom = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: row;
`;
