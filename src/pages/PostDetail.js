import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state)
  const [editTitle, setEditTitle] = useState(location.state.title);
  const [editContent, setEditContent] = useState(location.state.content);
    const data = JSON.parse(localStorage.getItem("posts"))
    console.log(data);
    // ((x(임의값)=>{} < 중괄호를 넣는 이유 배열 내 객체를 돌기 위해서 {}중괄호를 넣어야 객체를 돈다, x는 배열 안의 객체를 뜻함, 중괄호가 없으면 배열 안의 '요소'가 되는 것))
    // const compare = data.filter((x)=>{
    //     return x.id !== location.state.id
    // })

    let flatData = data.flat()

    const dataIndex = flatData.findIndex((x) =>{ return x.id == location.state.id})

    flatData[dataIndex].id = location.state.id;
    flatData[dataIndex].title = editTitle;
    flatData[dataIndex].content = editContent;

    localStorage.setItem("posts", JSON.stringify(flatData));

  return (
    <div>
      <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            navigate("/");
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
