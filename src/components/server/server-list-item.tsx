import styled from "styled-components";
import DiscordServerItem from "./server-item";
import { Dispatch, SetStateAction } from "react";
import { IDiscordServerItemData } from "./server-constant";
import DiscordCreateServerIc from "./create-server-item";
import { GigaChad } from "../../assets/images";

interface IListServerItem {
  dataSource: IDiscordServerItemData[];
  serverChoosen: string;
  setServerChoosen: Dispatch<SetStateAction<string>>;
}

const DiscordServerList = ({
  dataSource,
  serverChoosen,
  setServerChoosen,
}: IListServerItem) => {
  const MyServerImage = GigaChad; // later will be replaced by selector

  return (
    <StyledListServer>
      <StyledMyServerItem>
        <DiscordServerItem
          isMyServer={true}
          nodeChoosen={serverChoosen}
          serverId={"@me"} // get from store
          serverImg={MyServerImage}
          handleChangeNodeServer={setServerChoosen}
        />
        <StyledHorizontalLine />
      </StyledMyServerItem>
      {dataSource &&
        dataSource.map((data: IDiscordServerItemData, index) => {
          return (
            <DiscordServerItem
              key={index}
              isMyServer={false}
              nodeChoosen={serverChoosen}
              serverId={data.serverId}
              serverImg={data.serverImg}
              handleChangeNodeServer={setServerChoosen}
            />
          );
        })}
      <StyledHorizontalLine />
      <StyledServerCreatorItem>
        <DiscordCreateServerIc />
      </StyledServerCreatorItem>
    </StyledListServer>
  );
};

const StyledListServer = styled.div`
  height: 100vh;
  padding-top: 6px;
  padding-right: 6px;
  padding-left: 6px;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMyServerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6px;
`;

const StyledHorizontalLine = styled.hr`
  background: grey;
  color: grey;
  border-color: grey;
  border-radius: 2px;
  height: 3px;
  width: 50%;
  margin: 0 auto;
`;

const StyledServerCreatorItem = styled.div`
  margin-top: 6px;
`;

export default DiscordServerList;
