import React from "react";

import { usePostsContext } from "../../contexts/PostsContext";
import { PostList } from "../../components/post";
import { EmptyState } from "../../components/fallback";
import LinkButton from "../../components/common/LinkButton";

const Home = () => {
  const { posts } = usePostsContext();

  return (
    <>
      <LinkButton title={"추가하기"} path={"/post/write"} />
      {posts.length > 0 ? <PostList posts={posts} /> : <EmptyState />}
    </>
  );
};

export default Home;
