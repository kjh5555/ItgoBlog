import { useNavigate } from "react-router-dom";

function PostListItem(props) {
    const navigate = useNavigate();

  return (
    <div>
      {props.posts?.map((post, index) => {
        return (
          <p
          key={post.id}
          onClick={() => {
            navigate(`/${post.id}`);
          }}
          >
            {post.title} / {post.content}
          </p>
        );
      })}
    </div>
  );
}

export default PostListItem;
