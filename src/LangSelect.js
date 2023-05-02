import React from 'react';
import { examples } from './examples';


const allLanguages = Object.keys(examples).sort();

function LangSelect(props) {
  return (
  <div className="select-lang">
    Select a language ▼
    <ul>
        {allLanguages.map((language) => (
          <li key={language} onClick={() => props.onLangSelect(language)}>
            {language}
          </li>
        ))}
      </ul>
  </div>
  );
}

export default LangSelect;
