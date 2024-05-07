import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

const StyledButton = styled.button`
  width: fit-content;
  height: 30px;
  white-space: nowrap;
  background-color: orange;
  border-radius: 5px;
  padding: 5px 10px;
`;

export default Button;
