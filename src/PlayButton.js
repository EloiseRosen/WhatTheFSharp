import React from 'react';

function PlayButton(props) {
  return (
    <>
    {props.runLink !== '' && <a href={props.runLink} target="_blank" rel="noreferrer"><i className="play-icon fa-solid fa-play"></i></a>}
    </>
  );
}

export default PlayButton;
