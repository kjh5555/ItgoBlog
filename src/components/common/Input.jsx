import React from "react";

const Input = (props) => {
  const { value, onChange } = props;
  return <input value={value} onChange={onChange}></input>;
};

export default Input;
