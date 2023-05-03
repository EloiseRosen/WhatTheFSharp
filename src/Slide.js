import React, { useState } from 'react';
import SlideNav from './SlideNav';
import { examples } from './examples';


function Slide({ slideNum, setSlideNum, selectedLang }) {
  const examplesForLang = examples[selectedLang];

  return (
    <>
      <div className="slide-box">
        <pre>{examplesForLang[slideNum-1]}</pre>
      </div>

      <SlideNav slideNum={slideNum} setSlideNum={setSlideNum} totalSlides={examplesForLang.length}/>
    </>
  );
}

export default Slide;
