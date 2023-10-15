import React from 'react';
import Hero from '../images/hero.jpg';
import styled from 'styled-components';

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
    color: gray;
    font-weight:400;
    padding:10px;
    padding-top:0px;
`


const Card = ({Title, Description}) => {
    return (
        <HeroCard>
            <ImageHero src={Hero}></ImageHero>
            <CardTitle>{Title}</CardTitle>
            <CardSubtitle>{Description}</CardSubtitle>
        </HeroCard>
    )
  }
  
  export default Card;