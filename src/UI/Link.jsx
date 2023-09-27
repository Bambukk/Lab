import React from 'react';
import styled from 'styled-components';

const LinkWrap = styled.a`
    display:block;
    color: orange;
    font-size: 18px;
    font-weight: bold;
    cursor:pointer;
`


const Link = ({ children}) => {
  return (
    <LinkWrap>{children}</LinkWrap>
  )
}


export default Link;
