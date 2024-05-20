import React from 'react'
import HeaderStyled from '../styled/HeadStyled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Header({blogNm , btnNm}) {
  const location = useLocation();
  return (
    <HeaderStyled.HeaderWrapper>
      <Link to="/">
      <HeaderStyled.BlogName>{blogNm}</HeaderStyled.BlogName>
      </Link>
      {location.pathname === '/' ? 
      <Link to="/post/new">
      <HeaderStyled.VisitorButton>{btnNm}</HeaderStyled.VisitorButton>
      </Link> :
      ``}
      
    </HeaderStyled.HeaderWrapper>
  )
}
