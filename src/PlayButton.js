import React from 'react';


/**
 * The PlayButton component allows the user to click on a link where they can try out 
 * the displayed code for themselves.
 */
function PlayButton(props) {
  return (
    <>
      {props.runLink !== '' && <a href={props.runLink} target="_blank" rel="noreferrer" className="play-icon-a"><i className="play-icon fa-solid fa-play"></i></a>}
    </>
  );
}

export default PlayButton;
