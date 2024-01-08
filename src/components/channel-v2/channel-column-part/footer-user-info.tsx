import styled from "styled-components";
import { TomHardy } from "../../../assets/images";

const FooterUserInformation = () => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={TomHardy} alt="This is user's image" />
      </StyledImageContainer>
      <StyledInfoContainer>
        <div>nguyenducminhnguyenducminh</div>
        <div>ducminhsw721</div>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default FooterUserInformation;

const StyledContainer = styled.div`
  height: 40px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 3px;

  &:hover {
    background-color: #3f4248;
    cursor: pointer;
  }
`;

const StyledImageContainer = styled.div`
  height: 40px;
  width: 40px;

  & img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }
`;

const StyledInfoContainer = styled.div`
  height: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  overflow: hidden;

  & div {
    text-overflow: ellipsis;
  }
`;
