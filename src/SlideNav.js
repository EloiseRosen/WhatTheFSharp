import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyLink from './CopyLink';


function SlideNav({ slideNum, setSlideNum, totalSlides, lang }) {
  const navigate = useNavigate();

  const handlePrevClick = useCallback(() => {
    const newSlideNum = Math.max(1, slideNum-1);
    setSlideNum(newSlideNum);
    navigate(`/${lang}/${newSlideNum}`);
  }, [setSlideNum, navigate, slideNum, lang]);

  const handleNextClick = useCallback(() => {
    const newSlideNum = Math.min(totalSlides, slideNum+1);
    setSlideNum(newSlideNum);
    navigate(`/${lang}/${newSlideNum}`);
  }, [setSlideNum, navigate, slideNum, totalSlides, lang]);




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
