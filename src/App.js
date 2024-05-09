import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostWritePage from "./pages/PostWritePage";
import PostViewPage from "./pages/PostViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/write" element={<PostWritePage />} />
          <Route path="/:id" element={<PostViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
