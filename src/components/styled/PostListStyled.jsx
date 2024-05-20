import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostListStyled = {
    MainWrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `,
    PostList: styled.ul`
        list-style-type: none;
        padding: 0;
        width : -webkit-fill-available;
        margin-top : 50px;
    `,
    PostItem: styled.li`
        margin-bottom: 20px;
        border: 2px solid black;
        border-radius : 0.8rem;
        overflow : hidden;
        transition : transform 0.3s ease
    `,
    // PostLink를 Link 컴포넌트로 감싸서 스타일링
    PostLink: styled.p`
        text-decoration: none;
        color: #000; /* 글자 색상 설정 */
        font-size: 1.2rem;
        text-align:center;
        
    `,
    PostData : styled.span`
        font-size:1rem;
        text-algin:right;
        float:right;
        margin-top:20px;
        margin-right:10px;
    `,
    AnimatedPostItem : styled.div`
                       overflow: hidden;
                       transition: transform 0.3s ease;
                       transform: translateX(${props => props.slideLeft ? '-100%' : '0'});
    `,
    
};

export default PostListStyled;
