import styled from 'styled-components';

const commonStyled = {
    StyledButton : styled.button`
        padding: 8px 16px;
        font-size: 16px;
        border-width: 1px;
        border-radius: 8px;
        cursor: pointer;
        background-color: #007bff; /* 배경색 설정 */
        color: #fff; /* 텍스트 색상 설정 */
        border: none; /* 테두리 제거 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
        transition: background-color 0.3s ease; /* 배경색 변경 효과 */
    
        &:hover {
        background-color: #0056b3; /* 마우스 호버 시 배경색 변경 */
        }
    
        &:focus {
        outline: none; /* 포커스 시 기본 아웃라인 제거 */
        }
    `,
    StyledTextInput : styled.textarea`
        width: calc(100% - 32px);
        ${(props) =>
        props.height &&
        `
            height: ${props.height}px;
        `}
        padding: 16px;
        font-size: 16px;
        line-height: 20px;
        border: 1px solid #ced4da; /* 테두리 선 추가 */
        border-radius: 8px; /* 테두리를 둥글게 만들기 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
        transition: border-color 0.3s ease; /* 테두리 색상 변경 효과 */
        
        &:focus {
        border-color: #007bff; /* 포커스 시 테두리 색상 변경 */
        outline: none; /* 포커스 시 기본 아웃라인 제거 */
        }
        
        &::placeholder {
        color: #adb5bd; /* 플레이스홀더 텍스트 색상 설정 */
        }
    `
};



export default commonStyled;