import React from 'react';
import { examples } from './examples';

function Slide(props) {
    const examplesForLang = examples[props.selectedLang];

  return (
    <div className="slide-container">
        <p className="slide-num"># {props.slideNum}</p>
        <div className="example-container">
            <p><pre>{examplesForLang[props.slideNum-1]}</pre></p>
        </div>
        <ul className='nav-slides'>
            <li key='prev' onClick={() => props.onPrevClick(props.slideNum)}>prev</li>
            <li key='next' onClick={() => props.onNextClick(props.slideNum)}>next</li>
        </ul>
  </div>
  );
}

export default Slide;