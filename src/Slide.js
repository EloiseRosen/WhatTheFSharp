import React from 'react';
import SlideNav from './SlideNav';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { examples } from './examples';


function Slide({ slideNum, setSlideNum, selectedLang }) {
  const examplesForLang = examples[selectedLang];

  return (
    <>
      <div className="slide-box">
        <SyntaxHighlighter language={selectedLang.toLowerCase()} style={irBlack}>
          {examplesForLang[slideNum-1]}
        </SyntaxHighlighter>
      </div>

      <SlideNav slideNum={slideNum} setSlideNum={setSlideNum} totalSlides={examplesForLang.length} lang={selectedLang} />
    </>
  );
}

export default Slide;
