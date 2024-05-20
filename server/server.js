const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

// 바디 파서 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
    {
        "id": 1,
        "title": "JS에서 호이스팅이란?",
        "content": "안녕하세요, 재현입니다.\n이번 글에서는 호이스팅을 배워보겠습니다.\n코드가 실행될 때 함수나 변수가 가장 먼저 선언이 되는 것이라고 암기하셔도 됩니다.",
        "uploadDate": "2024-04-26"
        
    },
    {
        "id": 2,
        "title": "리액트의 조건부 렌더링이란?",
        "content": "안녕하세요, 재현입니다.\n이번 글에서는 리액트의 조건부 렌더링에 대해서 배워보도록 하겠습니다.\n조건부 렌더링은 말 그대로 조건에 따라서 렌더링을 다르게 한다는 의미입니다.",
        "uploadDate": "2024-04-29"
    },
    {
        "id": 3,
        "title": "리액트 Hook에 대해서 배워볼까요?",
        "content": "안녕하세요, 재현입니다.\n이번 글에서는 리액트의 Hook에 대해서 배워보도록 하겠습니다.\nHook은 리액트의 함수 컴포넌트의 흐름에 끼어들어서 다양한 작업들을 처리하기 위해서 사용합니다.",
        "uploadDate": "2024-04-02"
        
    }
   
];

app.use(cors());

// API 엔드포인트 설정
app.get('/api/posts', (req, res) => {
  res.json(data);
});

app.post('/api/newpost', (req, res) => {
  const { title, content, uploadDate } = req.body;
  if (!title || !content || !uploadDate) {
    return res.status(400).json({ message: '제목, 내용, 업로드 날짜를 모두 입력해주세요.' });
  }

  const newPost = {
    id: data.length + 1,
    title,
    content,
    uploadDate
  };
  
  data.push(newPost);
  res.status(201).json(newPost);
});

app.delete('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id); // URL에서 postId를 가져옴
  
  if(!postId){
    return res.status(400).json({message:'id가 오지 않음'})
  };
  deletedData = data.filter((x) => x.id != postId); // data를 필터링하여 삭제
  data.length = 0;
  data.push(...deletedData);
  
  res.status(201).json({message:'성공적인 삭제',status:201})
});


app.put('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id); // URL에서 postId를 가져옴
  console.log(postId)
  const { editTitle, editContent, editDate } = req.body;

  if (!postId) {
    return res.status(400).json({ message: 'id가 오지 않음' });
  }
  
  if (!editTitle || !editContent || !editDate) {
    return res.status(400).json({ message: '제목, 내용, 업로드 날짜를 모두 입력해주세요.' });
  }

  const postIndex = data.findIndex((post) => post.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).json({ message: '해당 id의 포스트를 찾을 수 없습니다.' });
  }

  // 포스트 수정
  data[postIndex].title = editTitle;
  data[postIndex].content = editContent;
  data[postIndex].uploadDate = editDate;

  res.status(200).json({ message: '성공적으로 수정되었습니다.', post: data[postIndex] });
});




app.listen(8080, function () {
  console.log('listening on 8080')
});
