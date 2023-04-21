import React, { useState } from 'react';
import Header from  './Header';
import LangSelect from  './LangSelect';
import Slide from  './Slide';


function App() {
  const [lang, setLang] = useState(null);
  const [slideNum, setSlideNum] = useState(1);

  function handleLangSelect(selectedLang) {
    console.log('here')
    setLang(selectedLang);
    console.log('lang is now', lang);
  }

  return (
    <>
      {lang === null ? (
        <>
          <Header />
          <LangSelect onLangSelect={handleLangSelect} />
        </>
      ) : (
        <Slide />
      )}
    </>
  );

}

export default App;
