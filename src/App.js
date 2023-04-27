import React, { useState, useEffect } from 'react';
import Header from  './Header';
import LangSelect from  './LangSelect';
import Slide from  './Slide';
import Footer from  './Footer';


function App() {
  const [lang, setLang] = useState(null);
  const [slideNum, setSlideNum] = useState(1);


  useEffect(() => {
    console.log('lang:', lang, 'slideNum:', slideNum);
  }, [lang, slideNum]);



  function handlePrevClick(prev) {
    setSlideNum(prev-1); // TODO handle case when on first slide
  }
  function handleNextClick(prev) {
    setSlideNum(prev+1); // TODO handle case when on last slide
  }

  return (
    <>
      <Header />

      {lang === null ? (
        <>
          <LangSelect onLangSelect={(selectedLang) => setLang(selectedLang)} />
        </>
      ) : (
        <Slide slideNum={slideNum} selectedLang={lang} onPrevClick={handlePrevClick} onNextClick={handleNextClick}/>
      )}
        
      <Footer />
    </>
  );

}

export default App;
