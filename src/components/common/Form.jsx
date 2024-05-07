import React from "react";
import styled from "styled-components";

const Form = (props) => {
  return (
    <Wrapper>
      <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 5px;
`;

const StyledForm = styled.form`
  width: calc(80% - 32px);
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px 5px;
`;
export default Form;
