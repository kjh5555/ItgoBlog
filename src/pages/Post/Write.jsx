import React from "react";
import { Button, Input, TextArea } from "../../components/common";

const Write = () => {
  return (
    <>
      <Button title={"뒤로가기"} path={"/"} />
      <Input />
      <TextArea />
      <Button title={"확인"} path={"/"} />
    </>
  );
};

export default Write;
