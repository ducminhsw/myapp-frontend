import styled from "styled-components";
import DiscordPersonalHeader from "./layout/personal-header";
import DiscordPersonalBody from "./layout/personal-body";
import DiscordPersonalFooter from "./layout/personal-footer";

const DiscordPersonalPart = () => {
  return (
    <StyledDiscordPersonalView>
      <StyledPersonalColumn>
        <DiscordPersonalHeader />
        <DiscordPersonalBody />
        <DiscordPersonalFooter />
      </StyledPersonalColumn>
    </StyledDiscordPersonalView>
  );
};

export default DiscordPersonalPart;

const StyledDiscordPersonalView = styled.div`
  flex: 1;
  display: flex;
  background: #2b2d31;
`;

const StyledPersonalColumn = styled.div`
  width: 240px;
  background-color: grey;
  display: flex;
  flex-direction: column;
`;
