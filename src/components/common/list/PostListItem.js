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
            // (`/${post.id} < useParams로 파라미터로 넘겨주는거`);
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
