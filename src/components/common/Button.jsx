import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { title, path } = props;

  return (
    <Link to={path}>
      <button>{title}</button>
    </Link>
  );
};

export default Button;
