import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostWritePage from "./pages/PostWritePage";
import PostViewPage from "./pages/PostViewPage";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* '/' < 기본페이지라는 뜻 */}
        <Route exact path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/write" element={<PostWritePage />} />
          <Route path="/:id" element={<PostViewPage />} />
          <Route path="/edit" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
