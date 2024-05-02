import React from "react";

const PostListItem = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.uploadDate}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostListItem;
