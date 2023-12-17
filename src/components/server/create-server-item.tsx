import styled from "styled-components";
import { DiscordAddServerIc } from "../../assets/icons/add-server-item";

const DiscordCreateServerIc = () => {
  return (
    <StyledServerItemContainer>
      <DiscordAddServerIc />
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
  &:hover {
    cursor: pointer;
    border-radius: 12px;
  }
`;

export default DiscordCreateServerIc;
