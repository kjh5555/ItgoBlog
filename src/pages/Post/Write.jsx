import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Input,
  TextArea,
  Form,
  LinkButton,
} from "../../components/common";
import { usePostsContext } from "../../contexts/PostsContext";
import { formatDate } from "../../utils";
import { useInputChange } from "../../hooks";

const Write = () => {
  const navigate = useNavigate();
  const { setPosts } = usePostsContext();

  const [title, setTitle] = useInputChange("");
  const [content, setContent] = useInputChange("");
  const currentDate = formatDate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) {
      alert("내용을 채워주세요.");
    } else {
      fetch("http://localhost:8080/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          title: title,
          content: content,
          uploadDate: currentDate,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("post error");
          }
          return res.json();
        })
        .then((jsonData) => {
          setPosts(jsonData);
          window.alert("작성완료!");
          navigate("/");
        });
    }
  };
  return (
    <>
      <LinkButton title={"뒤로가기"} path={"/"} />
      <Form onSubmit={onSubmit}>
        <Input value={title} onChange={setTitle} />
        <TextArea value={content} onChange={setContent} />
        <Button title={"확인"} />
      </Form>
    </>
  );
};

export default Write;
