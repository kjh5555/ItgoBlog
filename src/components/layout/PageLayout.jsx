import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const PageLayout = () => {
  return (
    <Layout>
      <main>
        <Header />
        <Outlet />
      </main>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
`;
