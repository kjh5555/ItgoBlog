import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../common";
import { usePostsContext } from "../../contexts/PostsContext";

const PostListItem = ({ post, id }) => {
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
    <>
      <Link to={`/post/${id}`}>
        <h1>{post.title}</h1>
      </Link>
      <p>{post.uploadDate}</p>
      <p>{post.content}</p>
      <Button title={"삭제"} path={"/"} onClick={onClick} />
    </>
  );
};

export default PostListItem;
