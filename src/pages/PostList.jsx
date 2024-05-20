import React, { useEffect, useState } from 'react';
import PostListStyled from '../components/styled/PostListStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import fetchData from '../contexts/fetchData';
import Button from '../components/common/Button';
import { deleteData } from '../contexts/deleteData';


export default function PostList() {
  const location = useLocation();
  const navigate = useNavigate()
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      setPostData(data || []); // 데이터가 없을 경우 빈 배열로 초기화
    };

    fetchPosts();
  }, [location.state]); // location.state가 변경될 때마다 데이터 다시 불러오기


  const handleDeletePost = async (postId) => {
    try {
      const response = await deleteData(postId);
      console.log(response.status)
      if (response && response.status === 201) {
        setPostData(prevData => prevData.filter(post => post.id !== postId));
      }

    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEditPost = (postId, postTitle, postContent)=>{
    navigate(`/post/edit/${postId}`,{state:{postId,postTitle,postContent}});
  }



  return (
    <PostListStyled.MainWrapper>
      <PostListStyled.PostList>
        {postData.map(post => (
          <PostListStyled.AnimatedPostItem key={post.id} slideLeft={false}>
          <PostListStyled.PostItem >
            <PostListStyled.PostData>{post.uploadDate}</PostListStyled.PostData>
            <PostListStyled.PostLink>{post.title}</PostListStyled.PostLink>
            <PostListStyled.PostLink>{post.content}</PostListStyled.PostLink>
            <Button title="수정" onClick={()=>handleEditPost(post.id, post.title, post.content)}/>
            <Button title="삭제" onClick={() => handleDeletePost(post.id)} />
          </PostListStyled.PostItem>
          </PostListStyled.AnimatedPostItem>
        ))}
      </PostListStyled.PostList>
    </PostListStyled.MainWrapper>
  );
}
