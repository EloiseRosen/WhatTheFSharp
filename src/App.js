import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useNavigate, useParams, Routes } from 'react-router-dom';
import Header from './Header';
import LangSelect from './LangSelect';
import Slide from './Slide';
import Footer from './Footer';


function getDisplayName(lang) {
  const problematic = {'csharp': 'C#', 'cpp': 'C++', 'fsharp': 'F#'}
  return  Object.keys(problematic).includes(lang) ? problematic[lang] : lang;
}

function MainComponent() {
  const [lang, setLang] = useState(null);
  const [slideNum, setSlideNum] = useState(1);
  const navigate = useNavigate();
  const { lang: urlLang, slideNum: urlSlideNum } = useParams();

  useEffect(() => {
    if (urlLang && urlSlideNum) {
      setLang(urlLang);
      setSlideNum(parseInt(urlSlideNum));
    }
  }, [urlLang, urlSlideNum]);

  useEffect(() => {
    if (lang && slideNum) {
      navigate(`/${lang}/${slideNum}`);
    }
  }, [lang, slideNum, navigate]);

  const handleLangSelect = (selectedLang) => {
    setLang(selectedLang);
    setSlideNum(1);
  };

  return (
    <div className="main">
      <Header lang={lang} getDisplayName={getDisplayName}/>
      <LangSelect onLangSelect={handleLangSelect} getDisplayName={getDisplayName} lang={lang}/>
      {lang !== null && <Slide slideNum={slideNum} setSlideNum={setSlideNum} selectedLang={lang} />}
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:lang/:slideNum" element={<MainComponent />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
