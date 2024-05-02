import React, { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("connect error");
        }
        return res.json();
      })
      .then((jsonData) => {
        setPosts(jsonData);
      });
  }, []);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  return useContext(PostsContext);
};

export default PostsContext;
