import { styled } from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Contents = styled.div`
  border: 1px solid grey;
`;

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <span
        onClick={() => {
          navigate("/");
        }}
      >
        My Blog
      </span>
      <Contents>
        <Outlet />
      </Contents>
    </div>
  );
}

export default Layout;
