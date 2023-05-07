import React, { useState } from 'react';


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
    <div className="copy-link-container">
       <button onClick={handleCopyLink}>
         <i className="copy-link-icon fa-solid fa-link"></i>
       </button>
       {showSuccessMsg && <span className="copy-success-msg">URL copied</span>}
    </div>
  );
}

export default CopyLink;
