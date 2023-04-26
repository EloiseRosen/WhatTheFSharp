import React from 'react';
import { examples } from './examples';

const allLanguages = Object.keys(examples);

function LangSelect(props) {
  // put this directly in the li?
  const handleClick = (language) => {
    props.onLangSelect(language);
  };

  return (
  <div className="select-lang">
    Select a language ▼
    <ul>
        {allLanguages.map((language) => (
          <li key={language} onClick={() => handleClick(language)}>
            {language}
          </li>
        ))}
      </ul>
  </div>
  );
}

export default LangSelect;