import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body{
    height: 100%;
   }
   #root{
    height: 100%;
   }
    a{
        text-decoration:none;
        color:inherit;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
    
`;

export default GlobalStyle;
