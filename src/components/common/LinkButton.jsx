import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  const { title, path } = props;
  return (
    <Link to={path}>
      <button>{title}</button>
    </Link>
  );
};

export default LinkButton;
