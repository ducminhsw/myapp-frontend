import styled from "styled-components";

const DiscordCreateServerIc = () => {
  return (
    <StyledServerItemContainer>
      <StyledServerImage />
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

const StyledServerImage = styled.img`
  width: 48px;
  height: 48px;
  transition: border-radius 0.2s ease-in-out;
`;

export default DiscordCreateServerIc;
