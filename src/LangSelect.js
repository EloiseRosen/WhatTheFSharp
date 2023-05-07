import React, { useState } from 'react';
import { examples } from './examples';


const allLanguages = Object.keys(examples).sort();

function LangSelect(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-lang">
      <div className="select-lang-button-content" onClick={() => setIsOpen(!isOpen)}>
        Select a language ▼
      </div>
      {isOpen && (
      <ul className="select-lang-options">
        {allLanguages.map((language) => (
          <li key={language} onClick={() => props.onLangSelect(language)}>
            {language}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default LangSelect;
