import React from "react";
import { Link } from "react-router-dom";

const PostListItem = ({ post, id }) => {
  return (
    <Link to={`/post/${id}`}>
      <h1>{post.title}</h1>
      <p>{post.uploadDate}</p>
      <p>{post.content}</p>
    </Link>
  );
};

export default PostListItem;
