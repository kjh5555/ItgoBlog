import React from "react";

const TextArea = (props) => {
  const { value, onChange } = props;
  return <textarea value={value} onChange={onChange}></textarea>;
};

export default TextArea;
