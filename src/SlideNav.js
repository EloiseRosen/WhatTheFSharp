import React, { useEffect, useCallback } from 'react';
import CopyLink from  './CopyLink';


function SlideNav({ slideNum, setSlideNum, totalSlides}) {
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

      <CopyLink />

      <button onClick={handleNextClick} disabled={slideNum === totalSlides}>
        <i className="prev-next fa-sharp fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default SlideNav;
