import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { SideNavBar } from "./SideNavBar";

export const PageLayout = () => {
  return (
    <Layout>
      <SideNavBar />
      <main>
        <Outlet />
      </main>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
`;
