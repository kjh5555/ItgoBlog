const findPost = (posts, id) => {
  return (
    posts?.find((post) => {
      if (isNaN(id)) {
        return post.id === id;
      } else {
        return post.id === parseInt(id);
      }
    }) ?? {}
  );
};

export default findPost;
