import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { PostsProvider } from "./contexts/PostsContext";

const App = () => {
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
};

export default App;
