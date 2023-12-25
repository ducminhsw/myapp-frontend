import styled from "styled-components";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { GigaChad, TomHardy } from "../../assets/images";

export interface IDiscordServerItem {
  isMyServer: boolean;
  nodeChoosen: string;
  serverId: string;
  serverImg?: string;
  handleChangeNodeServer: Dispatch<SetStateAction<string>>;
}

const DiscordServerItem = ({
  isMyServer,
  nodeChoosen,
  serverId,
  serverImg,
  handleChangeNodeServer,
}: IDiscordServerItem) => {
  const [isChoosen, setIsChoosen] = useState<boolean>(false);

  useEffect(() => {
    console.log("bottom");
  }, []);

  useEffect(() => {
    if (nodeChoosen === serverId) {
      setIsChoosen(true);
    } else {
      setIsChoosen(false);
    }
  }, [nodeChoosen, serverId]);

  const onChoosingServerNode = () => {
    handleChangeNodeServer(serverId);
  };

  return (
    <StyledServerItemContainer onClick={onChoosingServerNode}>
      <StyledServerImage
        src={isMyServer ? GigaChad : serverImg}
        $choosen={isChoosen}
      />
    </StyledServerItemContainer>
  );
};

const StyledServerItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 6px;
`;

const StyledServerImage = styled.img.attrs<{ $choosen: boolean; src?: string }>(
  (props) => ({
    src: props.src || TomHardy,
  })
)`
  width: 48px;
  height: 48px;
  border-radius: ${(props) => (props.$choosen ? "12px" : "100%")};
  transition: border-radius 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    border-radius: 12px;
  }
`;

export default DiscordServerItem;
