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
  width: 48px;
  height: 48px;
  margin-bottom: 6px;
  border-radius: 100%;
  background-color: #313338;
  transition: border-radius 0.1s ease-in-out, background-color 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    border-radius: 12px;
    background-color: #23a559;
  }
`;

export default DiscordCreateServerIc;
