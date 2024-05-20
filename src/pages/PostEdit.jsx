import React from 'react'
import PostWriteStyled from '../components/styled/PostWriteSryled';
import { useState } from 'react';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import jh from '../utils/util';
import { useNavigate, useLocation } from 'react-router-dom';
import putData from '../contexts/putData';

export default function PostEdit({updateData}) {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [editTitle, setEditTitle] = useState(location.state.postTitle?location.state.postTitle:'' );
  const [editContent, setEditContent] = useState(location.state.postContent?location.state.postContent:'');
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const nowDate = jh.now();
  const postId = location.state.postId
  
  const handleEditPost = async () => {
    if (!editTitle) {
      setTitleError('제목을 입력해주세요.');
      return;
    }
    if (!editContent) {
      setContentError('내용을 입력해주세요.');
      return;
    }
    
    try {
      await putData({ postId,editTitle, editContent, editDate:nowDate }); // 객체 형태로 전달
      updateData();
      // 데이터 업데이트 함수 호출하여 메인 페이지 데이터 업데이트
      // 메인 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error('Error writing post:', error);
    }
      
  };


  return (
    <PostWriteStyled.Wrapper>
      <PostWriteStyled.Container>
        {titleError && <span style={{ color: 'red' }}>{titleError}</span>}
        <TextInput
          height={20}
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
            setTitleError('');
          }}
          placeholder="제목"
        />
        
        {contentError && <span style={{ color: 'red' }}>{contentError}</span>}
        <TextInput
          height={480}
          value={editContent}
          onChange={(e) => {
            setEditContent(e.target.value);
            setContentError('');
          }}
          placeholder="내용"
        />
       
        <Button title="수정하기" onClick={()=>handleEditPost()} />
      </PostWriteStyled.Container>
    </PostWriteStyled.Wrapper>
  )
}
