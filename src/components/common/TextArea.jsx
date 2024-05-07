import React from "react";
import styled from "styled-components";

const TextArea = (props) => {
  const { value, onChange } = props;
  return <StyledTextArea value={value} onChange={onChange}></StyledTextArea>;
};

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 500px;
  border: 1px solid orange;
  margin: 5px 0px;
`;
export default TextArea;
