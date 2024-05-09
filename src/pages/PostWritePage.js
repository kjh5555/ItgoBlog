import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostWritePage = () => {
  const [posts, setPosts] = useState(!localStorage.getItem('posts') ? [] : JSON.parse(localStorage.getItem('posts')));
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  console.log(content);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, { title: title, content: content }]);
    localStorage.setItem(
      "posts",
      JSON.stringify([...posts, { id: 1, title: title, content: content }])
    );
    navigate("/");
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
