import Avatar from "./avatar";
import styled from "styled-components";

const StyleMessageBody = styled.section`
  & {
    position: relative;
    border-top: 2px solid rgba(181, 186, 193, 0.1);
    padding: 15px 0px;
  }

  .wrapper {
    display: flex;
    padding: 15px 0px;
    font-size: 14px;
  }

  .time-message {
    position: absolute;
    top: -10px;
    right: 50%;
    font-size: 12px;
    transform: translateX(50%);
  }

  .wrapper:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
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

const MessageBody = () => {
  return (
    <StyleMessageBody>
      <section className="wrapper">
        <p className="time-message">December 17,2023</p>
        <Avatar />
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
      </section>
    </StyleMessageBody>
  );
};

export default MessageBody;
