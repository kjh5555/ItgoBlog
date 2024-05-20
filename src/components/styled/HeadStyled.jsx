import styled from 'styled-components'


const HeaderStyled  = {
    HeaderWrapper : styled.div`
        height:100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #f8f9fa; /* 배경색상 설정 */
    `,
    BlogName : styled.h1`
        font-size: 1.5rem;
        font-weight: bold;
    `,
    VisitorButton : styled.button`
        background-color: #007bff; /* 버튼 배경색상 설정 */
        color: #fff; /* 버튼 텍스트 색상 설정 */
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
    `,
    

   
}

export default HeaderStyled;