import React from 'react'
import commonStyled from '../styled/commonStyled'

function TextInput({height, value, onChange}){
            return <commonStyled.StyledTextInput height={height} onChange={onChange} value={value}/>
        }

export default TextInput