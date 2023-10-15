import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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
    border-top:1px gray solid;
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    
`



const Section = ({title, Cards}) => {
  return (
    <Container>
        <TitleWrapper>
            <SectionTitile>{title}</SectionTitile>
            <NumSignature>(1562)</NumSignature>
        </TitleWrapper>
        <InputWrapper>
            <InputString placeholder= {title}></InputString>
            <InputButton>SEARCH</InputButton>
        </InputWrapper>
        <HeroCard>
            {
                Cards.map((card,id)=> (
                    <Card key = {id} Title = {card['TitleHero']} Description = {card['Description']} ></Card>
                ))
            }
        </HeroCard>
    </Container>
  )
}

export default Section;