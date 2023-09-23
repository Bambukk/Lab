import React from 'react';
import styled from 'styled-components';

const Linka = styled.a`
    display:block;
    color: orange;
    font-size: 18px;
    font-weight: bold;
`


const Title = ({ children}) => {
  return (
    <Linka>{children}</Linka>
  )
}


export default Title;
