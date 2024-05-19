import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PostDetail = () => {
  const location = useLocation();
  console.log(location.state)
  const [editTitle, setEditTitle] = useState(location.state.title);
  const [editContent, setEditContent] = useState(location.state.content);

 

  return (
    <div>
      <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setEditTitle([...title, ])
        }}>
          <input type="text" value={editTitle} 
          onChange={(e)=> setEditTitle(e.target.value)}
          />

          <input type="text" value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          />
          <button>ok</button>
        </form>
      </div>
    </div>
  );
};

export default PostDetail;
