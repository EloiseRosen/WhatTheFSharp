import React, { useState, useEffect } from 'react';
import Header from  './Header';
import LangSelect from  './LangSelect';
import Slide from  './Slide';
import Footer from  './Footer';


function App() {
  const [lang, setLang] = useState(null);


  useEffect(() => {
    console.log('lang:', lang);
  }, [lang]);


  return (
    <>
      <div className="main">

          <Header />

        {lang === null ? (
          <>
            <LangSelect onLangSelect={(selectedLang) => setLang(selectedLang)} />
          </>
        ) : (
          <Slide selectedLang={lang} />
        )}
      </div>
    
  
     <Footer />
    </>
  );

}

export default App;
