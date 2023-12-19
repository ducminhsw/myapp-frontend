import styled from "styled-components";

export default function ChannelContentInfo() {
  return (
    <StyledContentInfo>
      <StyledText1>minhnd21</StyledText1>
      <StyledText2>minhnd21@gmail.com</StyledText2>
    </StyledContentInfo>
  );
}

const StyledContentInfo = styled.div`
  width: 100px;
  flex: 0;
  margin: auto 0;
`;

const StyledText1 = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;
const StyledText2 = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;
