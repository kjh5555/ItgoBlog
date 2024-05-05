import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { Write, Detail, Update } from "../pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post",
        children: [
          {
            path: "write",
            element: <Write />,
          },
          {
            path: ":id",
            element: <Detail />,
          },
          {
            path: ":id/update",
            element: <Update />,
          },
        ],
      },
    ],
  },
]);
