import React from "react";
import styled from "styled-components";
import image from '../images/image 9.png';

const Container = styled.footer`
    width:100%;
    background-color:gray;
    float:bottom;
    display:flex;
    flex-direction: column; 
`

const Signature = styled.p`
    color:#fff;
    margin-left:22px;
`

const LinkTitle = styled.a`
    color:black;
    margin-left:22px;
    color:#fff;
    
`

const Image = styled.img`
    display:block;
    width:120px;
    height:60px;
`




const Footer = () => {
    return (
      <>
        <Container>
            <Image src={image}></Image>
            <Signature>Data provided by Marvel. © {new Date().getFullYear()} MARVEL</Signature>
            <LinkTitle href="https://developer.marvel.com/documentation/getting_started">developer.marvel.com</LinkTitle>
        </Container>
      </>
    )
  }
  
  export default Footer;