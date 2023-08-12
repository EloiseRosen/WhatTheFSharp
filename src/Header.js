import React, { useState, useEffect, useCallback } from 'react';


/**
 * The Header component displays the title. Its appearance and behavior varies depending on
 * application state. On the main page, the title is typed out. When we're on examples, the 
 * title links back to start. We don't blink the cursor when on examples because it gets annoying.
 * The subtitle is shown only on the main page.
 */
function Header(props) {
  const [typedTitle, setTypedTitle] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);
  
  /**
   * On the main page, type out the title.
   */
  const typeTitle = useCallback((text, idx=0) => {
    if (idx < text.length) {
      setTypedTitle((prev) => prev + text[idx]);
      setTimeout(() => typeTitle(text, idx+1), 100)
    } else {
      setDoneTyping(true);
    }
  }, []);

  useEffect(() => {
    if (props.lang === null && !doneTyping) {
      typeTitle('What The F#');
    }
  }, [props.lang, typeTitle, doneTyping]);

  const h1Style = {
    fontSize: window.innerWidth <= 480 ? '40px' : (props.lang === null ? '70px' : '53px'),
    marginTop: props.lang === null ? '60px' : '15px',
    marginBottom: props.lang === null ? '15px': '0px'
  };

  return (
    <header>

      <a 
        href="mailto:eloise.rosen+WTFS@gmail.com?subject=What%20The%20F%23%3A%20Contribute%20an%20Example"
        id="contribute-example"
      >
        Contribute an Example
      </a>

      {props.lang === null ? (
        <h1 style={h1Style}>
          {typedTitle}
          <span className={doneTyping ? "blink" : undefined}>█</span>
        </h1>
      ) : (
        <a href="https://whatthefsharp.com"> {/* when we're on examples, title links back to start */}
          <h1 style={h1Style}>
            What The F#<span>█</span> {/* don't blink cursor when on examples because it gets annoying */}
          </h1>
        </a>
      )}

      {props.lang === null && <h2>A Collection of Surprising Behavior by Programming Language</h2>}
      

    </header>
  );
}

export default Header;
