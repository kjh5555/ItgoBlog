import PostListItem from "../list/PostListItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PostList() {
  const [posts, setPosts] = useState(
    !localStorage.getItem("posts")
      ? []
      : JSON.parse(localStorage.getItem("posts"))
  );
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/write");
        }}
      >
        글 작성하기
      </button>
      {posts.length > 0 ? <PostListItem posts={posts} /> : "게시글이 없습니다"}
    </div>
  );
}

export default PostList;
