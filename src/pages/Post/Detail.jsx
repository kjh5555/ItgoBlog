import React from "react";
import { useParams } from "react-router-dom";

import { usePostsContext } from "../../contexts/PostsContext";
import { Button } from "../../components/common";

const Detail = () => {
  const { id } = useParams();
  const { posts } = usePostsContext();
  const post = posts?.find((post) => post.id === parseInt(id)) ?? {};
  return (
    <>
      <Button title={"뒤로가기"} path={"/"} />
      <h1>{post.title}</h1>
      <p>{post.uploadDate}</p>
      <p>{post.content}</p>
      <Button title={"수정하기"} path={`/post/${id}/update`} />
    </>
  );
};

export default Detail;
