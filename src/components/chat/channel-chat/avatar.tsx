import styled from "styled-components";

interface Props {
  source: string;
}

const Avatar = ({ source }: Props) => {
  return (
    <StyleAvatar>
      <img src={source} alt="This is an avatar" />
    </StyleAvatar>
  );
};

export default Avatar;

const StyleAvatar = styled.div`
  img {
    display: flex;
    justify-content: center;
    algign-items: center;
    width: 40px;
    height: 40px;
    margin: 5px;
    max-width: 50px;
    background-color: black;
    border-radius: 50%;
  }
`;
