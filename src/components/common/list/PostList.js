import PostListItem from "../list/PostListItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PostViewPage from "../../../pages/PostViewPage";

function PostList(props) {
  const [posts, setPosts] = useState(
    !localStorage.getItem("posts")
      ? []
      : JSON.parse(localStorage.getItem("posts"))
  );
  const navigate = useNavigate();
  console.log(props)

  return (
    <div>
      <button
        onClick={() => {
          navigate("/write");
        }}
      >
        글 작성하기
      </button>
      {/* <PostListItem posts={posts} 앞에 있는 posts는 변수명, 뒤 posts가 실제 posts(const [posts < 이거]) */}
      {posts.length > 0 ? <PostListItem posts={posts} /> : "게시글이 없습니다"}
    </div>
  );
}

export default PostList;
