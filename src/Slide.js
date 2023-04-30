import React, { useState, useEffect, useCallback } from 'react';
import { examples } from './examples';

function Slide(props) {
  const [slideNum, setSlideNum] = useState(1);
  const examplesForLang = examples[props.selectedLang];

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {console.log('URL successfully copied to clipboard');},
      (err) => {console.error('error copying URL: ', err);}
    );
  };

  const handlePrevClick = useCallback(() => {
    setSlideNum(Math.max(1, slideNum - 1));
  }, [slideNum]);

  const handleNextClick = useCallback(() => {
    setSlideNum(Math.min(examplesForLang.length, slideNum + 1));
  }, [slideNum, examplesForLang.length]);

  const handleKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevClick();
    } else if (event.key === 'ArrowRight') {
      handleNextClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {window.removeEventListener('keydown', handleKeydown);};
  }, [handleKeydown]);

  return (<>

    <div className="slide-box">
      <pre>{examplesForLang[slideNum-1]}</pre>
    </div>

    <div className="nav-slides">

      <button onClick={handlePrevClick} disabled={slideNum === 1}>
        <i className="prev-next fa-sharp fa-solid fa-chevron-left"></i>
      </button>

      <span className="slide-num">{slideNum} / {examplesForLang.length}</span>

      <button onClick={handleCopyUrl}>
        <i className="copy-url fa-solid fa-link"></i>
      </button>

      <button onClick={handleNextClick} disabled={slideNum === examplesForLang.length}>
        <i className="prev-next fa-sharp fa-solid fa-chevron-right"></i>
      </button>
    </div>

  </>);
}

export default Slide;
