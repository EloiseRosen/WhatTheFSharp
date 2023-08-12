import React from 'react';
import { examples } from './examples';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SpoilerBox from './SpoilerBox';
import SlideNav from './SlideNav';


/**
 * The Slide component displays the code example, with syntax highlighting.
 */
function Slide({ slideNum, setSlideNum, selectedLang }) {
  const examplesForLang = examples[selectedLang];

  // When we're switching languages, changing the slideNum to 1 might not happen before
  // we try to access the code example for slideNum. Instead of throwing an error, chill 
  // for a sec and Slide will re-render after slideNum has finished updating.
  if (!examplesForLang[slideNum - 1]) {
    return null;
  }

  return (
    <>
      <div className="slide-box">

        <SyntaxHighlighter language={selectedLang.toLowerCase()} style={irBlack} wrapLongLines={true}>
          {examplesForLang[slideNum-1]['code']}
        </SyntaxHighlighter>

        <div className="bottom-of-slide-box-wrapper"> {/* need in 1 div so that space-between pushes all of this to bottom*/}
          <SpoilerBox
            explanation={examplesForLang[slideNum - 1]['explanation']}
            slideNum={slideNum} selectedLang={selectedLang} // these 2 are needed for the useEffect dependency array
          />
          {examplesForLang[slideNum-1]['credit'] !== '' && <p className="credit">credit: {examplesForLang[slideNum-1]['credit']}</p>}
        </div>
      </div>

      <SlideNav 
        slideNum={slideNum} 
        setSlideNum={setSlideNum} 
        totalSlides={examplesForLang.length} 
        lang={selectedLang} 
        runLink={examplesForLang[slideNum - 1]['runLink']} 
      />

    </>
  );
}

export default Slide;
