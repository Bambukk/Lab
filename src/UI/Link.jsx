import React from 'react';
import styled from 'styled-components';

const LinkWrap = styled.a`
    display:block;
    color: orange;
    font-size: 18px;
    font-weight: bold;
    cursor:pointer;
`


const UILink = ({link,child}) => {
  return (
    <LinkWrap href = {link}>{child}</LinkWrap>
  )
}


export default UILink;
