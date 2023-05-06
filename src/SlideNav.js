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
    <div class="slide-nav-container">

      <button onClick={handlePrevClick} disabled={slideNum === 1} class="prev-button">
        <i className="prev-next-icon fa-sharp fa-solid fa-chevron-left"></i>
      </button>

      <div class="middle-of-navbar">
        <span>{slideNum}/{totalSlides}</span>
        <CopyLink />
      </div>

      <button onClick={handleNextClick} disabled={slideNum === totalSlides} class="next-button">
        <i className="prev-next-icon fa-sharp fa-solid fa-chevron-right"></i>
      </button>

    </div>
  );
}

export default SlideNav;
