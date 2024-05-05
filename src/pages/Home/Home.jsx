import React from "react";

import { usePostsContext } from "../../contexts/PostsContext";
import { PostList } from "../../components/post";
import { Button } from "../../components/common";

const Home = () => {
  const { posts } = usePostsContext();

  //post
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: 1000,
  //       title: "post test",
  //       body: "testing",
  //       uploadDate: "2024-05-02",
  //     }),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("post error");
  //       }
  //       return res.json();
  //     })
  //     .then((jsonData) => {
  //       console.log(jsonData);
  //     });
  // }, []);
  return (
    <>
      <>
        <Button title={"추가하기"} path={"/post/write"} />
      </>

      {posts.length > 0 && <PostList posts={posts} />}
    </>
  );
};

export default Home;
