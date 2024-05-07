import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
      <Wrapper>
        <Container>
          <h1>{post.title}</h1>
          <small>{post.uploadDate}</small>
          <p>{post.content}</p>
        </Container>
        <LinkButton title={"수정하기"} path={`/post/${id}/update`} />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 5px;
`;
const Container = styled.div`
  width: calc(80% - 32px);
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  border: 1px solid orange;
  overflow-y: auto;
  & > h1 {
    font-size: 30px;
    font-weight: 500;
    margin: 10px 0px;
  }
  & > p {
    font-size: 18px;
    margin: 15px 0px;
  }
`;
export default Detail;
