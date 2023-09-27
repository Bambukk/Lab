import React from 'react';
import Header from './components/Header';
import GlobalStyles from './global';
import Footer from './components/Footer';
import SectionCharacters from './components/SectionCharacters';

const App = () => {
  return (
    <>
      <Header></Header>
      <SectionCharacters></SectionCharacters> 
      <Footer></Footer>
      <GlobalStyles></GlobalStyles>
    </>
  )
}

export default App;
