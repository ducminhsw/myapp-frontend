import { useSelector } from "react-redux";
import styled from "styled-components";
import { authUserBasicInfo } from "../../../redux/features/auth/selector";

const DiscordPersonalHeader = () => {
  const userBasicInfo = useSelector(authUserBasicInfo);
  return (
    <StyledChannelColumnHeader>
      <StyledWrapper>
        <StyledServerName>{`Hello, ${
          userBasicInfo.firstName ?? "user"
        }`}</StyledServerName>
        <StyledServerOptions></StyledServerOptions>
      </StyledWrapper>
    </StyledChannelColumnHeader>
  );
};

export default DiscordPersonalHeader;

const StyledChannelColumnHeader = styled.div`
  width: 100%;
  height: 48px;
  background-color: #2b2d31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 16px;
`;

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledServerName = styled.div`
  margin-left: 7px;
`;
const StyledServerOptions = styled.div`
  margin-right: 7px;
`;
