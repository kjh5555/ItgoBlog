import React from "react";
import { useParams } from "react-router-dom";

import { usePostsContext } from "../../contexts/PostsContext";
import { findPost } from "../../utils";
import { LinkButton } from "../../components/common";

const Detail = () => {
  const { id } = useParams();
  const { posts } = usePostsContext();
  const post = findPost(posts, id);

  return (
    <>
      <LinkButton title={"뒤로가기"} path={"/"} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.uploadDate}</p>
        <p>{post.content}</p>
      </div>
      <LinkButton title={"수정하기"} path={`/post/${id}/update`} />
    </>
  );
};

export default Detail;
