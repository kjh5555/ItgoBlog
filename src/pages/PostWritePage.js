import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PostWritePage = () => {
  const [posts, setPosts] = useState(!localStorage.getItem('posts') ? [] : JSON.parse(localStorage.getItem('posts')));
  const location = useLocation();
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, { title: title, content: content }]);
    localStorage.setItem("posts", JSON.stringify([...posts, {id: crypto.randomUUID(), title: title, content: content }]));
    navigate("/");
    alert("글 작성을 완료하시겠습니까?")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>ok</button>
      </form>
    </div>
  );
};

export default PostWritePage;
