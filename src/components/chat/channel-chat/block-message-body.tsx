import Avatar from "./avatar";
import styled from "styled-components";

// interface Props {

// }

const MessageBody = () => {
  return (
    <StyleMessageBody>
      <StyledSectionMessage>
        <Avatar source={"not yet"} />
        <div className="right_content">
          <div>
            <p>Do Quang Trung</p>
            <p>12/13/2023 11:21 PM</p>
          </div>
          <p>
            Message Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsum praesentium vitae alias deserunt ipsa nesciunt commodi vero
            magnam similique accusamus quia ea dicta facilis ratione, architecto
            assumenda enim dolore? Ab.
          </p>
        </div>
      </StyledSectionMessage>
    </StyleMessageBody>
  );
};

export default MessageBody;

const StyleMessageBody = styled.section`
  & {
    position: relative;
    padding: 3px 0px;
  }

  .right_content > div {
    display: flex;
    gap: 5px;
  }

  .right_content > div > p + p {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .right_content > div > p {
    text-align: end;
  }
`;

const StyledSectionMessage = styled.section`
  display: flex;
  padding: 15px 0px;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
