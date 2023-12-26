import styled from "styled-components";

const StyleAvatar = styled.div`
  img {
    display: flex;
    justify-content: center;
    algign-items: center;
    width: 50px;
    height: 50px;
    margin: 5px;
    max-width: 50px;
    background-color: black;
    border-radius: 50%;
  }
`;
const Avatar = () => {
  return (
    <StyleAvatar>
      <img src="" alt="This is an avatar" />
    </StyleAvatar>
  );
};

export default Avatar;
