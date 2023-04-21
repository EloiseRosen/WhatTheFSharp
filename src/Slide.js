import React from 'react';

function Slide(props) {

    

  return (
  <div className="slide">
    <p>here is slide {props.slideNum} </p>
    <ul>
        <li key='prev' onClick={() => props.onPrevClick(props.slideNum)}>prev</li>
        <li key='next' onClick={() => props.onNextClick(props.slideNum)}>next</li>
    </ul>

  </div>
  );
}

export default Slide;