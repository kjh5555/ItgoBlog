import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Blog
      </h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  color: orange;

  display: flex;
  justify-content: center;

  & > h1 {
    width: fit-content;
    font-size: 50px;
    font-weight: 600;
    cursor: pointer;
  }
`;
export default Header;
