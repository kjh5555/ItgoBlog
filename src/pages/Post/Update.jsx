import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { usePostsContext } from "../../contexts/PostsContext";
import {
  Form,
  Button,
  Input,
  TextArea,
  LinkButton,
} from "../../components/common";
import { findPost, formatDate } from "../../utils";
import { useInputChange } from "../../hooks";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts, setPosts } = usePostsContext();
  const post = findPost(posts, id);

  const [title, setTitle] = useInputChange(post?.title);
  const [content, setContent] = useInputChange(post?.content);
  const currentDate = formatDate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) {
      alert("내용을 채워주세요.");
    } else {
      fetch(`http://localhost:8080/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: title,
          content: content,
          uploadDate: currentDate,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("update error");
          }
          return res.json();
        })
        .then((jsonData) => {
          setPosts(jsonData);
          window.alert("수정완료!");
          navigate(`/post/${id}`);
        });
    }
  };

  return (
    <>
      <LinkButton title={"뒤로가기"} path={`/post/${id}`} />
      <Form onSubmit={onSubmit}>
        <Input value={title} onChange={setTitle} />
        <TextArea value={content} onChange={setContent} />
        <Button title={"확인"} />
      </Form>
    </>
  );
};

export default Update;
