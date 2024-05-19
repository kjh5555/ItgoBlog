import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostDetail from "./PostDetail";

const PostViewPage = (props) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [posts, setPosts] = useState(
    !localStorage.getItem("posts")
      ? []
      : JSON.parse(localStorage.getItem("posts"))
  );
  // id가 같은 post를 찾는다. > 현재id랑 전체 posts id 비교
  const [post] = posts.filter((post) => {
    return post.id == id;
  });
  // [post] < 대괄호를 넣은 이유 = posts가 배열 상태로 오기 때문에. 배열 안에 있는 객체의 id에 접근해야하기 때문에 [post]를 넣어서 배열을 깨 준 것.

  // post가져온다 posts 중에서 id가 같은 post를 찾는다

  function deletePost(id) {

    console.log(id)

    const remainingPosts = posts.filter(post => post.id !== id);

    setPosts(remainingPosts);
    // localStorage.removeItem(posts.id)

    localStorage.setItem("posts", JSON.stringify(remainingPosts));
  
    navigate("/");
    alert("삭제하시겠습니까?")
  }

  function editPost(id, title, content) {
    console.log(id, title, content)
    navigate("/edit", {state: {id, content, title}});
  }

  return (
    <div>
      {post.title} / {post.content}
      <button
      onClick={() => editPost(id, post.title, post.content)}
      >수정</button>
      <button
      onClick={() => deletePost(id)}
      >삭제</button>
    </div>
  );
};

export default PostViewPage;
