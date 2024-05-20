import React from 'react'
import commonStyled from '../styled/commonStyled'

export default function Button({title, onClick}){
    return <commonStyled.StyledButton onClick={onClick}>{title || "button"}</commonStyled.StyledButton>
}

