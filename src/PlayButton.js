import React from 'react';

function PlayButton(props) {
  return (
    <>
      {props.runLink !== '' && <a href={props.runLink} target="_blank" rel="noreferrer" className="play-icon-a"><i className="play-icon fa-solid fa-play"></i></a>}
    </>
  );
}

export default PlayButton;
