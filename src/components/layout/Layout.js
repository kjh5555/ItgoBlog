import { styled } from "styled-components";
import PostList from "../common/list/PostList";
import { Outlet } from "react-router-dom";

const Contents = styled.div`
border: 1px solid grey;
`;

function Layout() {
return (
    <div>
        <span>My Blog</span>
        <Contents>
           <Outlet />
        </Contents>
    </div>
)
}

export default Layout;