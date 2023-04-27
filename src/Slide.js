import React from 'react';
import { examples } from './examples';

function Slide(props) {
    const examplesForLang = examples[props.selectedLang];

  return (
    <div className="slide-container">
        <div className="example-container">
            <p><pre>{examplesForLang[props.slideNum-1]}</pre></p>
        </div>
        <ul className='nav-slides'>
            <li key='prev' onClick={() => props.onPrevClick(props.slideNum)}><i className="prev-next fa-sharp fa-solid fa-chevron-left"></i></li>
            <li className="slide-num">{props.slideNum} / {examplesForLang.length}</li>
            <i class="fa-solid fa-link"></i>
            <li key='next' onClick={() => props.onNextClick(props.slideNum)}><i className="prev-next fa-sharp fa-solid fa-chevron-right"></i></li>
        </ul>
  </div>
  );
}

export default Slide;
