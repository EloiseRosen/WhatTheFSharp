import React, { useState } from 'react';
import SlideNav from './SlideNav';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { examples } from './examples';


function Slide({ slideNum, setSlideNum, selectedLang }) {
  const examplesForLang = examples[selectedLang];
  const [showExplanation, setShowExplanation] = useState(false);

  const explanationStyle = {
    color: showExplanation ? '#35fd06' : 'transparent',
    whiteSpace: 'pre-wrap'
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
                              onClick={() => setShowExplanation(!showExplanation)}
                            >
                                  <div className="spoiler-click-msg">
                                    {showExplanation ? '' : 'click for explanation'}
                                  </div>
        
                                  <div style={explanationStyle}>
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
