import React from 'react';
import Header from '../components/Header';
import GlobalStyles from '../global';
import Footer from '../components/Footer';
import Section from '../components/Section';

const Characters = [
  {'TitleHero': '3-D Man', 'Description': 'hrrhkpose'},
  {'TitleHero': 'A Bomb (HAS)', 'Description': 'fyukyklgyutfk'},
  {'TitleHero': 'A.I.M', 'Description': '43636367363'},
  {'TitleHero': 'Aaron Stack', 'Description': 'drjkuil2523'},
]

const App = () => {
  return (
    <>
      <Header></Header>
      <Section title = 'Charecters' Cards = {Characters}></Section> 
      <Footer></Footer>
      <GlobalStyles></GlobalStyles>
    </>
  )
}

export default App;
