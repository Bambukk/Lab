import React from 'react';
import styled from 'styled-components';
import image from '../images/image 9.png';
import { NavLink, Outlet } from 'react-router-dom';

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
    color: orange;
    font-size:18px;
    text-decoration: none;
`

const test = {
  display:'block',
  width: '120px',
  height:'60px',
}




const Header = () => {
  return (
    <>
    <Container>
        <img style = {test} src={image}></img>
        <NavBar>
          <NavLink to="/"  style = {({isActive}) => ({color: isActive ? 'white' : 'orange' })}>Characters</NavLink>
          <NavLink to="/Comics" style = {({isActive}) => ({color: isActive ? 'white' : 'orange' })}>Comics</NavLink>
          <NavLink to="/Series" style = {({isActive}) => ({color: isActive ? 'white' : 'orange' })}>Series</NavLink>
        </NavBar>
    </Container>
  </>
  )
}

export default Header;