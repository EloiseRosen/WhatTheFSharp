import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Navigate, useParams, Routes } from 'react-router-dom';
import Header from './Header';
import LangSelect from './LangSelect';
import Slide from './Slide';
import Footer from './Footer';


function getDisplayName(lang) {
  const problematic = {'csharp': 'C#', 'cpp': 'C++', 'fsharp': 'F#'}
  return  Object.keys(problematic).includes(lang) ? problematic[lang] : lang;
}

function App() {
  const [lang, setLang] = useState(null);

  return (
    <Router>
      <div className="main">
        <Header lang={lang} getDisplayName={getDisplayName} />
        <Routes>
          <Route index element={<LangSelectWrapper setSelectedLang={setLang} />} />
          <Route path="/:lang/:slideNum" element={<SlideWrapper setSelectedLang={setLang} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

function LangSelectWrapper({ setSelectedLang }) {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang, setSelectedLang]);

  return lang === null ? (
    <LangSelect onLangSelect={(selectedLang) => setLang(selectedLang)} getDisplayName={getDisplayName} />
  ) : (
    <Navigate to={`/${lang}/1`} />
  );
}

function SlideWrapper({ setSelectedLang }) {
  const { lang, slideNum } = useParams();
  const [currentSlideNum, setCurrentSlideNum] = useState(parseInt(slideNum, 10));

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang, setSelectedLang]);

  return <Slide slideNum={currentSlideNum} setSlideNum={setCurrentSlideNum} selectedLang={lang} />;
}

export default App;
