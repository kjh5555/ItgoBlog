import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PostViewPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(
    !localStorage.getItem("posts")
      ? []
      : JSON.parse(localStorage.getItem("posts"))
  );
  // id가 같은 post를 찾는다. > 현재id랑 전체 posts id 비교
 const [post] = ( posts.filter((post) => {
    return post.id == id;
  }));
  // [post] < 대괄호를 넣은 이유 = posts가 배열 상태로 오기 때문에. 배열 안에 있는 객체의 id에 접근해야하기 때문에 [post]를 넣어서 배열을 깨 준 것.
  console.log(post);

  // post가져온다 posts 중에서 id가 같은 post를 찾는다

  return <div>{id}</div>;
};

export default PostViewPage;
