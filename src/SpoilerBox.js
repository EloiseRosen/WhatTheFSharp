import React, { useState, useEffect } from 'react';


function SpoilerBox({ explanation, slideNum, selectedLang }) {
  const [showExplanation, setShowExplanation] = useState(false);

  // when we reveal the explanation on one slide, we want the state to go back to
  // unrevealed when we change slides. So when slideNum or selectedLang changes, 
  // showExplanation needs to go back to false.
  useEffect(() => {
    setShowExplanation(false);
  }, [slideNum, selectedLang]);

  const spoilerBoxStyle = {
    backgroundColor: showExplanation ? '#323131' : '#1d1c1c'
  }
  const explanationStyle = {
    color: showExplanation ? '#35fd06' : 'transparent'
  };

  return (
    <>
      {explanation !== null && 
        <div className="spoiler-box" style={spoilerBoxStyle} onClick={() => setShowExplanation(!showExplanation)}>
          <div className="spoiler-click-msg">
            {showExplanation ? '' : 'click for explanation'}
          </div>
          <div className={`explanation ${showExplanation ? 'showExplanation' : ''}`} style={explanationStyle}>
            {explanation}
          </div>
        </div>
      }
    </>
  );
}

export default SpoilerBox;
