import PostListItem from "../list/PostListItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PostList() {
 const [ guide, setGuide] = useState(false);
 const navigate = useNavigate();
 
    return (
        <div>
            <button onClick={()=>{navigate("/write")}}>글 작성하기</button>
            {guide ? <PostListItem /> : "게시글이 없습니다"}
        </div>
    )
};

export default PostList;