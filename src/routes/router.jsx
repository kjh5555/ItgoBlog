import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import Home from "../pages/Home";

import PostForm from "../pages/PostForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <PostForm />,
      },
    ],
  },
]);
