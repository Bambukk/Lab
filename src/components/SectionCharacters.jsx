import React from 'react';
import styled from 'styled-components';
import Hero from '../images/hero.jpg'

const Container = styled.section`
    margin:30px;
    min-height:100vh;
`
const SectionTitile = styled.h2`
    font-size:40px;
    margin-bottom:20px;
`

const TitleWrapper = styled.div`
    display:flex;
    align-items:center;
`

const NumSignature = styled.p`
    color:gray;
    margin-left:5px;
`

const InputString = styled.input`
    border:1px gray solid;
    width:80%;
    height:100%;
    color:gray;
    font-size:17px;
    font-weight:500;
`

const InputWrapper = styled.div`
    height:35px;
    display:flex;
    justify-content:space-between;
`

const InputButton = styled.button`
    border: 1px white solid;
    background: orange;
    width:250px;
    height:100%;
    font-weight:600;
    font-size:17px;
    color:#fff;
`

const HeroCard = styled.div`
    border:1px solid;
    margin-top:30px;
    display:flex;
    flex-direction:column;
    width:230px;
`

const ImageHero = styled.img`
    height:200px;
`

const CardTitle = styled.h3`
    color:rgb(241,47,77);
    padding:10px;
    padding-bottom:0px;
`
const CardSubtitle = styled.h5`
    color:rgb(208,208,208);
    font-weight:200;
    padding:10px;
    padding-top:0px;
`


const SectionCharacters = () => {
  return (
    <Container>
        <TitleWrapper>
            <SectionTitile>Characters</SectionTitile>
            <NumSignature>(1562)</NumSignature>
        </TitleWrapper>
        <InputWrapper>
            <InputString placeholder= 'Search for characters by Name'></InputString>
            <InputButton>SEARCH</InputButton>
        </InputWrapper>
        <HeroCard>
            <ImageHero src={Hero}></ImageHero>
            <CardTitle>3-D Man</CardTitle>
            <CardSubtitle>No description provided</CardSubtitle>
        </HeroCard>
    </Container>
  )
}

export default SectionCharacters;