import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = (props) => {
  const { title, path } = props;
  return (
    <Link to={path}>
      <StyledLinkButton>{title}</StyledLinkButton>
    </Link>
  );
};

const StyledLinkButton = styled.button`
  width: fit;
  height: 30px;
  border: 3px solid orange;
  border-radius: 5px;
`;
export default LinkButton;
