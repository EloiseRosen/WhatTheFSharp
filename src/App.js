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


  return (
    <>
      <div className="main">

          <Header />

        {lang === null ? (
          <>
            <LangSelect onLangSelect={(selectedLang) => setLang(selectedLang)} />
          </>
        ) : (
          <Slide slideNum={slideNum} setSlideNum={setSlideNum} selectedLang={lang} />
        )}
      </div>
    
  
     <Footer />
    </>
  );

}

export default App;
