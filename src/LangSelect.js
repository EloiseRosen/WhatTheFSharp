import React, { useState, useRef, useEffect } from 'react';
import { examples } from './examples';
import { useNavigate } from 'react-router-dom';

const allLanguages = Object.keys(examples).sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);


/**
 * The LangSelect component is the dropdown that allows the user to select a language.
 * Its appearance varies depending on whether we're on the main page or a language-specific page.
 */
function LangSelect(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  /**
   * If user clicks outside the dropdown, close the dropdown.
   */
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    }
  }, []);

  let selectLangDivStyle;
  if (props.lang === null) {
    selectLangDivStyle = {
      fontSize: '25px',
      margin: '100px auto 250px auto',
      /* Note: Size of dropdown is 300px, so .select-lang margin-bottom
      and .footer-icon-container margin-top should allow enough space 
      to fit that nicely. */
      background: 'var(--med-gray)',
      border: '3px ridge var(--pink)',
      borderRadius: '10px',
      width: '330px'
    }
  } else {
    selectLangDivStyle = {
      display: 'inline-flex',
      fontSize: '28px',
      marginTop: '5px',
      marginBottom: '20px',
      marginLeft: '50px',
      background: 'transparent',
      border: '5px solid rgb(128, 128, 128, .7)',
      borderRadius: '10px',
      padding: '0px 10px',
      position: 'relative'
    }
  }
  const selectLangButtonStyle = {
    color: props.lang === null ? 'var(--light-green)' : 'var(--coral)',
    padding: props.lang === null ?  '20px' : '10px',
    cursor: 'pointer'
  }
  const downArrowStyle = {
    color: props.lang === null ? 'var(--light-green)' : 'var(--med-gray)',
  }
  const selectLangOptionsStyle = {
    left: props.lang === null ? '0' : '-15px'
  }

  /**
   * Handle when user selects a new language.
   */
  function handleLangSelect(language) {
    props.onLangSelect(language);
    setIsOpen(false);
    navigate(`/${language}/1`);
  }

  return (
    <div style={selectLangDivStyle} ref={dropdownRef}>
      <div className="dropdown-container">
        <div style={selectLangButtonStyle} onClick={() => setIsOpen(!isOpen)}>
          {props.lang === null ? 'Select a language' :  props.getDisplayName(props.lang)}
          <span style={downArrowStyle}> ▼</span>
        </div>
        {isOpen && (
          <ul className="select-lang-options" style={selectLangOptionsStyle}>
            {allLanguages.map((language) => (
              <li key={language} onClick={() => handleLangSelect(language)}>
                {props.getDisplayName(language)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LangSelect;
