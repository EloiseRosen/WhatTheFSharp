import React from 'react';

function LangSelect(props) {
  const languages = ['Java', 'JavaScript', 'Python', 'R'];


  // put this directly in the li?
  const handleClick = (language) => {
    props.onLangSelect(language);
  };



  return (
  <div className="select-lang">
    Select a language ▼
    <ul>
        {languages.map((language) => (
          <li key={language} onClick={() => handleClick(language)}>
            {language}
          </li>
        ))}
      </ul>
  </div>
  );
}

export default LangSelect;