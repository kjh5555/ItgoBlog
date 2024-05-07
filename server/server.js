const express = require("express");
const app = express();

const data = [
  {
    id: 1,
    title: "JS에서 호이스팅이란?",
    content:
      "안녕하세요, 재현입니다.\n이번 글에서는 호이스팅을 배워보겠습니다.\n코드가 실행될 때 함수나 변수가 가장 먼저 선언이 되는 것이라고 암기하셔도 됩니다.",
    uploadDate: "2024-04-26",
  },
  {
    id: 2,
    title: "리액트의 조건부 렌더링이란?",
    content:
      "안녕하세요, 재현입니다.\n이번 글에서는 리액트의 조건부 렌더링에 대해서 배워보도록 하겠습니다.\n조건부 렌더링은 말 그대로 조건에 따라서 렌더링을 다르게 한다는 의미입니다.",
    uploadDate: "2024-04-29",
  },
  {
    id: 3,
    title: "리액트 Hook에 대해서 배워볼까요?",
    content:
      "안녕하세요, 재현입니다.\n이번 글에서는 리액트의 Hook에 대해서 배워보도록 하겠습니다.\nHook은 리액트의 함수 컴포넌트의 흐름에 끼어들어서 다양한 작업들을 처리하기 위해서 사용합니다.",
    uploadDate: "2024-04-02",
  },
];

app.use(express.json());
const cors = require("cors");
app.use(cors());
// API 엔드포인트 설정
//get
app.get("/api/posts", (req, res) => {
  console.log("post!");
  return res.json(data);
});
//post
app.post("/api/posts", (req, res) => {
  const newPost = req.body;
  data.push(newPost);
  res.status(201).json(data);
});
//put
app.put("/api/posts/:id", (req, res) => {
  const updatePost = data.find((post) => {
    if (isNaN(req.params.id)) {
      return post.id === req.params.id;
    } else {
      return post.id === parseInt(req.params.id);
    }
  });
  if (!updatePost) return res.status(404).send("no data");
  updatePost.title = req.body.title;
  updatePost.content = req.body.content;
  return res.json(data);
});
//delete
app.delete("/api/posts/:id", (req, res) => {
  const deletePost = data.find((post) => {
    if (isNaN(req.params.id)) {
      return post.id === req.params.id;
    } else {
      return post.id === parseInt(req.params.id);
    }
  });
  if (!deletePost) return res.status(404).send("no data");
  const index = data.indexOf(deletePost);
  data.splice(index, 1);
  return res.json(data);
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
