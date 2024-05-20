import PostWriteStyled from '../components/styled/PostWriteSryled';
import { useState } from 'react';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import jh from '../utils/util';
import { useNavigate } from 'react-router-dom';
import { writePost } from '../contexts/writePost';

export default function PostWrite({ updateData }) {
  const navigate = useNavigate(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const nowDate = jh.now();
  
  const handleWritePost = async () => {
    if (!title) {
      setTitleError('제목을 입력해주세요.');
      return;
    }
    if (!content) {
      setContentError('내용을 입력해주세요.');
      return;
    }
    
    try {
      await writePost({ title, content, uploadDate:nowDate }); // 객체 형태로 전달
      // 데이터 업데이트 함수 호출하여 메인 페이지 데이터 업데이트
      updateData();
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
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleError('');
          }}
          placeholder="제목"
        />
        
        {contentError && <span style={{ color: 'red' }}>{contentError}</span>}
        <TextInput
          height={480}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setContentError('');
          }}
          placeholder="내용"
        />
       
        <Button title="등록하기" onClick={handleWritePost} />
      </PostWriteStyled.Container>
    </PostWriteStyled.Wrapper>
  );
}
