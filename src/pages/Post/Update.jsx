import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { usePostsContext } from "../../contexts/PostsContext";
import { Button, Input, TextArea } from "../../components/common";

const Update = () => {
  const { id } = useParams();
  const { posts } = usePostsContext();
  const post = posts?.find((post) => post.id === parseInt(id)) ?? {};

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <>
      <Input value={title} />
      <TextArea value={content} />
      <Button title={"확인"} path={`/post/${id}`} />
    </>
  );
};

export default Update;
