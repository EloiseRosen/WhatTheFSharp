import React from 'react';


function Header(props) {
  const h1Style = {
    fontSize: props.lang === null ? '70px' : '53px',
    marginTop: props.lang === null ? '70px' : '-10px',
    marginBottom: props.lang === null ? '15px': '0px'
  };
  const h2Style = {
    marginTop: props.lang === null ? '0px' : '-8px',
    marginLeft: props.lang === null ? '0px' : '35px',
    marginBottom: props.lang === null ? '0px' : '37px',
    fontSize: props.lang === null ? '25px' : '30px'
  };

  return (
    <header>

      <a 
        href="mailto:eloise.rosen+WTFS@gmail.com?subject=What%20the%20F%23%3A%20Contribute%20an%20Example"
        id="contribute-example"
      >
        Contribute an Example
      </a>

      {props.lang === null ? (
        <h1 style={h1Style}>
          What The F#<span className="blink">█</span>
        </h1>
      ) : (
        <a href="https://whatthefsharp.com"> {/* when we're on examples, title links back to start */}
          <h1 style={h1Style}>
            What The F#<span>█</span> {/* don't blink cursor when on examples because it gets annoying */}
          </h1>
        </a>
      )}

      <h2 style={h2Style}>
        {props.lang === null ? 'A Collection of Surprising Behavior by Programming Language' : props.lang}
      </h2>

    </header>
  );
}

export default Header;
