import React from 'react';
import styled from 'styled-components';
import image from '../images/image 9.png';
import NavBar from './NavBar';


const Container = styled.header`
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:#dc143c;
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
        <NavBar></NavBar>
    </Container>
  )
}

export default Header;