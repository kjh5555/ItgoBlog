import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import PostList from './PostList';
import PostWrite from './PostWrite';
import fetchData from '../contexts/fetchData';
import PostEdit from './PostEdit';

export default function Router() {
  const data = []; // 초기값으로 빈 배열 설정

  return (
    <BrowserRouter>
      <Header blogNm={'재현 Blog'} btnNm={'게시글 등록'} />
      <Routes>
        <Route path="/" element={<PostList data={data} />} />
        <Route path="/post/new" element={<PostWrite updateData={fetchData}/>} />
        <Route path='/post/edit/:id' element={<PostEdit updateData={fetchData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}