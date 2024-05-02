import React from "react";

import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <>
      {posts?.map((post) => {
        return <PostListItem key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;