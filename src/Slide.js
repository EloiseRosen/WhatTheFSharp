import React, { useState } from 'react';
import SlideNav from './SlideNav';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { examples } from './examples';


function Slide({ slideNum, setSlideNum, selectedLang }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const examplesForLang = examples[selectedLang];

  // TODO see if I can remove this now
  // this is for an error where we're switching languages and the current slideNum
  // doesn't exist for the new language, and the slideNum update to 1 hasn't happened 
  // yet, so there's an error when we try to access the 'code' value of undefined, and
  // if we just wait for a sec slideNum will update and Slide will re-render.
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
        
                                  <div className="explanation" style={explanationStyle}>
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
