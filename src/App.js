import React, { useState } from 'react';
import Header from  './Header';
import LangSelect from  './LangSelect';
import Slide from  './Slide';
import Footer from  './Footer';


function App() {
  const [lang, setLang] = useState(null);

  return (
    <>
      <div className="main">
        <Header lang={lang}/>
        {lang === null ? (
          <LangSelect onLangSelect={(selectedLang) => setLang(selectedLang)} />
        ) : (
          <Slide selectedLang={lang} />
        )}
      </div>
    
      <Footer />
    </>
  );
}

export default App;
