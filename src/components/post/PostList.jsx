import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <Wrapper>
      {posts?.map((post) => {
        return <PostListItem key={post.id} post={post} id={post.id} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 5px;
`;

export default PostList;
