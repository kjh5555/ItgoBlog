import styled from "styled-components";

const ListItem = styled.li`
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 20px 15px;
  font-size: 18px;
  border: 1px solid #ddd;
  & + li {
    margin-top: 18px;
  }
`;

const PostListItem = (Props) => {
  const { post, onClick } = Props;
  return <ListItem onClick={onClick}>{post.text}</ListItem>;
};
export default PostListItem;
