import styled from 'styled-components';


const PostWriteStyled = {
    Wrapper : styled.div`
        padding:16px;
        width: calc(100% - 32px);
        display: flex;
        flex-direction: column;
        align-items : center;
        justify-content: center;
    `,
    Container : styled.div`
        width: 100%;
        max-width: 720px;
        :not(:last-child){
            margin-bottom: 16px;
        }
    `
};


export default PostWriteStyled;
