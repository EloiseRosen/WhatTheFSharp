import React, { useEffect, useCallback } from 'react';


function SlideMenu({ slideNum, setSlideNum, totalSlides}) {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {console.log('URL successfully copied to clipboard');},
      (err) => {console.error('error copying URL: ', err);}
    );
  };

  const handlePrevClick = useCallback(() => {
    setSlideNum(Math.max(1, slideNum - 1));
  }, [slideNum, setSlideNum]);
  const handleNextClick = useCallback(() => {
    setSlideNum(Math.min(totalSlides, slideNum + 1));
  }, [slideNum, setSlideNum, totalSlides]);

  const handleKeydown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevClick();
    } else if (event.key === 'ArrowRight') {
      handleNextClick();
    }
  }, [handlePrevClick, handleNextClick]);
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {window.removeEventListener('keydown', handleKeydown);};
  }, [handleKeydown]);

  return (
    <div className="nav-slides">
      <button onClick={handlePrevClick} disabled={slideNum === 1}>
        <i className="prev-next fa-sharp fa-solid fa-chevron-left"></i>
      </button>

      <span className="slide-num">{slideNum} / {totalSlides}</span>

      <button onClick={handleCopyUrl}>
        <i className="copy-url fa-solid fa-link"></i>
      </button>

      <button onClick={handleNextClick} disabled={slideNum === totalSlides}>
        <i className="prev-next fa-sharp fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default SlideMenu;
