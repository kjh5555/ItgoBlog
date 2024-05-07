import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { value, onChange } = props;
  return <StyledInput value={value} onChange={onChange}></StyledInput>;
};

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid orange;
`;
export default Input;
