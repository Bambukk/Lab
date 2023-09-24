import React from 'react';
import styled from 'styled-components';
import image from '../images/image 9.png';
import Link from '../UI/Link';


const Container = styled.header`
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:#dc143c;
`

const NavBar = styled.div`
    float:right;
    width:17%;
    display:flex;
    justify-content: space-around;
    align-items: center;   
    margin-right:20px;
`

const test = {
  display:'block',
  width: '120px',
  height:'60px',
}


const Header = () => {
  return (
    <Container>
        <img style = {test} src={image}></img>
        <NavBar>
          <Link>Characters</Link>
          <Link>Comics</Link>
          <Link>Series</Link>
        </NavBar>
    </Container>
  )
}

export default Header;