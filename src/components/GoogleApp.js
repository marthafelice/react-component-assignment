import React from 'react';
import Header from './Header.js';
import SearchSection from './SearchSection';
import LanguageLink from './LanguageLink.jsx';
import Footer from './Footer.js';


function GoogleApp() {
  return (
    <div className="App">
    <Header></Header>
    <SearchSection></SearchSection>
    <LanguageLink/>
     <Footer/>
    </div>
  );
}

export default GoogleApp;
