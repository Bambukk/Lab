import React from 'react';
import styled from 'styled-components';
import image from '../images/image 9.png';


const Container = styled.header`
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:rgb(255,10,5);
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

const UILink = styled.a`
  display:block;
  color: orange;
  font-size: 18px;
  font-weight: bold;
  cursor:pointer;
`


const Header = () => {
  return (
    <>
    <Container>
        <img style = {test} src={image}></img>
        <NavBar>
          <UILink href="/">Characters</UILink>
          <UILink href="/Comics">Comics</UILink>
          <UILink href="/Series">Series</UILink>
        </NavBar>
    </Container>
  </>
  )
}

export default Header;