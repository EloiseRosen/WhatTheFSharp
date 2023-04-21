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

  function handlePrevClick(prev) {
    setSlideNum(prev-1); // TODO handle case when on first slide
  }
  function handleNextClick(prev) {
    setSlideNum(prev+1); // TODO handle case when on last slide
  }

  return (
    <>
      {lang === null ? (
        <>
          <Header />
          <LangSelect onLangSelect={handleLangSelect} />
        </>
      ) : (
        <Slide slideNum={slideNum} onPrevClick={handlePrevClick} onNextClick={handleNextClick}/>
      )}
    </>
  );

}

export default App;
