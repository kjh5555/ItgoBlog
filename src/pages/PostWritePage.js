import React from "react";
import { useState } from "react";

const PostWritePage = () => {
  const [posts, setPosts] = useState(!localStorage.getItem('posts') ? [] : JSON.parse(localStorage.getItem('posts')));
  const [content, setContent] = useState();
  const [title, setTitle] = useState();

  console.log(content);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, { title: title, content: content }]);
    localStorage.setItem(
      "posts",
      JSON.stringify([...posts, { title: title, content: content }])
    );
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

      <div>
        {posts?.map((data, index) => {
          return (
            <p>
              {data.title} / {data.content}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PostWritePage;
