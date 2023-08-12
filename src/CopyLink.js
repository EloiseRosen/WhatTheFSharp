import React, { useState } from 'react';


/**
 * The CopyLink component provides functionality for copying the direct URL to the
 * current example with a button click. A message is briefly shown upon success.
 */
function CopyLink() {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        setShowSuccessMsg(true);
        setTimeout(() => setShowSuccessMsg(false), 1000);
      },
      (err) => console.error('error copying URL: ', err)
    );
  }

  return (
    <>
        <button className="copy-link-icon-button" onClick={handleCopyLink}>
         <i className="copy-link-icon fa-solid fa-link"></i>
       </button>
       {showSuccessMsg && <span className="copy-success-msg">URL copied</span>}
    </>
  );
}

export default CopyLink;
