import styled from "styled-components";
import PostList from "../../components/common/PostList";
import Btn from "../../components/UI/button";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  // const data = JSON.parse();
  return (
    <>
      <Header>상희 블로그 메인입니다.</Header>
      <Container>
        <PostList />
        <Btn text="글쓰기" />
      </Container>
    </>
  );
};
export default Home;

const Header = styled.div`
  width: 100%;
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
`;
