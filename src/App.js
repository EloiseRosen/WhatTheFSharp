import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom';
import Header from './Header';
import LangSelect from './LangSelect';
import Slide from './Slide';
import Footer from './Footer';


/**
 * Some language names have problematic characters and thus are stored under a
 * name different from their display name. The getDisplayName function fetches the 
 * correct display name.
 */
function getDisplayName(lang) {
  const problematic = {'csharp': 'C#', 'cpp': 'C++', 'fsharp': 'F#'}
  return  Object.keys(problematic).includes(lang) ? problematic[lang] : lang;
}

/**
 * The App component is the main component. It has state for which language, if any,
 * is selected. Router is used so that the URL is updated to domain.com/chosenLanguage/slideNum,
 * and so that if someone navigates directly to domain.com/chosenLanguage/slideNum they are shown
 * the correct content.
 */
function App() {
  const [lang, setLang] = useState(null);

  return (
    <Router>
      <div className="main">
        <Header lang={lang} getDisplayName={getDisplayName} />
        <LangSelect lang={lang} onLangSelect={(selectedLang) => setLang(selectedLang)} getDisplayName={getDisplayName} />
        <Routes>
          <Route path="/:lang/:slideNum" element={<SlideWrapper setSelectedLang={setLang} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


function SlideWrapper({ setSelectedLang }) {
  const { lang, slideNum } = useParams();
  const [currentSlideNum, setCurrentSlideNum] = useState(parseInt(slideNum, 10));

  useEffect(() => {
    setSelectedLang(lang);
    setCurrentSlideNum(parseInt(slideNum, 10)); 
  }, [lang, slideNum, setSelectedLang]);

  return <Slide slideNum={currentSlideNum} setSlideNum={setCurrentSlideNum} selectedLang={lang} />;
}

export default App;
