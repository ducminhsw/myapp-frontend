import styled from "styled-components";

export default function ChannelContentSetting() {
  return (
    <StyledContentSetting>
      <span>
        <i className="fa-solid fa-microphone"></i>
      </span>
      <span>
        <i className="fa-solid fa-headphones"></i>
      </span>
      <span>
        <i className="fa-solid fa-gear"></i>
      </span>
    </StyledContentSetting>
  );
}

const StyledContentSetting = styled.div`
  display: flex;
  flex: auto 1;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
