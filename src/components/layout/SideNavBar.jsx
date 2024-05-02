import styled from "styled-components";
const Container = styled.div`
  width: 200px;
  height: 100vh;
  background: skyblue;
  padding: 2.4rem;
`;

export const SideNavBar = () => {
  return (
    <Container>
      <div>사이드 메뉴 입니다.</div>
    </Container>
  );
};
