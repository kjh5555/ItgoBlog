import styled from "styled-components";
import PostListItem from "./PostListItem";
const PostListUl = styled.ul`
  padding: 30px 0;
`;
const PostList = (Props) => {
  const { Posts, onClickItem } = Props;
  return (
    <>
      <div>
        <PostListUl>
          {Posts &&
            PostList.map((post, idx) => {
              return (
                <PostListItem
                  text={post}
                  key={post.id}
                  onClick={() => onClickItem(post)}
                />
              );
            })}
        </PostListUl>
      </div>
    </>
  );
};

export default PostList;
