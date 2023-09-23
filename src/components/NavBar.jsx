import React from 'react';
import styled from 'styled-components';
import Title from '../UI/Title';

const Container = styled.div`
    float:right;
    width:15%;
    display:flex;
    justify-content: space-around;
    align-items: center;   
    margin-right:20px;
`


const NavBar = () => {
  return (

    <Container>
        <Title>Characters</Title>
        <Title>Comics</Title>
        <Title>Series</Title>
    </Container>
  )
}

export default NavBar;