import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../common";
import { usePostsContext } from "../../contexts/PostsContext";

const PostListItem = ({ post, id }) => {
  const navigate = useNavigate();
  const { setPosts } = usePostsContext();

  const onClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:8080/api/posts/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("delete error");
          }
          return res.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
          setPosts(jsonData);
          window.alert("삭제완료!");
        });
    }
  };
  return (
    <Wrapper>
      <Container
        onClick={() => {
          navigate(`/post/${id}`);
        }}
      >
        <h1>{post?.title}</h1>
        <p>{post?.uploadDate}</p>
        <p>{`${post?.content?.substring(0, 20)}...`}</p>
      </Container>
      <Button title={"삭제"} onClick={onClick} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(80% - 32px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid orange;
  border-radius: 8px;
  margin: 10px 0px;
  padding: 5px 10px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  margin-right: 10px;
  cursor: pointer;

  & > h1 {
    font-size: 25px;
    font-weight: 500;
  }
`;
export default PostListItem;
