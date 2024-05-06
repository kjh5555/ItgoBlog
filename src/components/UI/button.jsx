import styled from "styled-components";
const Btn = styled.button`
  min-width: 100px;
  background: #000;
  color: #fff;
  padding: 15px;
  text-align: center;
  border-radius: 30px;
  font-size: 16px;
  margin-left: auto;
`;

const Button = (Props) => {
  const { text, onClick } = Props;
  return <Btn onClick={onClick}>{text}</Btn>;
};
export default Button;
