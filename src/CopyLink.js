import React from 'react';


function CopyLink() {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {console.log('URL successfully copied to clipboard');},
      (err) => {console.error('error copying URL: ', err);}
    );
  };

  return (
    <button onClick={handleCopyUrl}>
      <i className="copy-url fa-solid fa-link"></i>
    </button>
  );
}

export default CopyLink;
