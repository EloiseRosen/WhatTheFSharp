import React, { useState, useEffect } from 'react';
import SlideNav from './SlideNav';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { examples } from './examples';


function Slide({ slideNum, setSlideNum, selectedLang }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const examplesForLang = examples[selectedLang];

  // when we reveal the explanation on one slide, we want the state to go back to
  // unrevealed when we change slides. So when slideNum changes, showExplanation
  // needs to go back to false.
  useEffect(() => {
    setShowExplanation(false);
  }, [slideNum, selectedLang]);

  // When we're switching languages, changing the slideNum to 1 might not happen before
  // we try to access the code example for slideNum. Instead of throwing an error, chill 
  // for a sec and Slide will re-render after slideNum has finished updating.
  if (!examplesForLang[slideNum - 1]) {
    return null;
  }

  const spoilerBoxStyle = {
    backgroundColor: showExplanation ? '#323131' : '#1d1c1c'
  }
  const explanationStyle = {
    color: showExplanation ? '#35fd06' : 'transparent'
  };

  return (
    <>
      <div className="slide-box">


        <SyntaxHighlighter language={selectedLang.toLowerCase()} style={irBlack} wrapLongLines={true}>
          {examplesForLang[slideNum-1]['code']}
        </SyntaxHighlighter>


          <div className="bottom-of-slide-box-wrapper"> {/* need in 1 div so that space-between pushes all of this to bottom*/}

                  {examplesForLang[slideNum-1]['explanation'] !== "" && 

                              <div 
                              className="spoiler-box"
                              style={spoilerBoxStyle}
                              onClick={() => setShowExplanation(!showExplanation)}
                            >
                                  <div className="spoiler-click-msg">
                                    {showExplanation ? '' : 'click for explanation'}
                                  </div>
        
                                  <div className={`explanation ${showExplanation ? 'showExplanation' : ''}`} style={explanationStyle}>
                                    {examplesForLang[slideNum-1]['explanation']}
                                  </div>
                          </div>
                   }



                  {examplesForLang[slideNum-1]['credit'] !== '' && 
                  <p className="credit">credit: {examplesForLang[slideNum-1]['credit']}</p>
                  }
          </div>

      </div>


      <SlideNav slideNum={slideNum} setSlideNum={setSlideNum} totalSlides={examplesForLang.length} lang={selectedLang} />
    </>
  );
}

export default Slide;
