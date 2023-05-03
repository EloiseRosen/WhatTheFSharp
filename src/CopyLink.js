import React, { useState } from 'react';


function CopyLink() {
  const [showSuccessTooltip, setShowSuccessTooltip] = useState(false);

  function handleCopyUrl() {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        setShowSuccessTooltip(true);
        setTimeout(() => setShowSuccessTooltip(false), 1000);
      },
      (err) => console.error('error copying URL: ', err)
    );
  }

  return (
    <>
      <button onClick={handleCopyUrl}>
        <i className="copy-url-icon fa-solid fa-link"></i>
      </button>
      {showSuccessTooltip && <span className="copy-success-tooltip">copied</span>}
    </>
  );
}

export default CopyLink;
