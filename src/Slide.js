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
            <li key='prev' onClick={() => props.onPrevClick(props.slideNum)}><i class="fa-sharp fa-solid fa-chevron-left" style={{color: '#35fd06'}}></i></li>
            <li key='next' onClick={() => props.onNextClick(props.slideNum)}><i class="fa-sharp fa-solid fa-chevron-right" style={{color: '#35fd06'}}></i></li>
        </ul>
  </div>
  );
}

export default Slide;
