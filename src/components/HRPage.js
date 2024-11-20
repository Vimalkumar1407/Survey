import React, { useState } from 'react';

const HRPage = ({ onPublish }) => {
  const [iframeCode, setIframeCode] = useState('');

  const handlePublishClick = () => {
    if (iframeCode) {
      onPublish(iframeCode);
      setIframeCode('');
    } else {
      alert('Please paste the embed code to publish.');
    }
  };

  return (
    <div className="container">
      <h1>HR Survey Page</h1>
      <div className="form-group">
        <label>Paste Google Form Embed Code:</label>
        <textarea
          value={iframeCode}
          onChange={(e) => setIframeCode(e.target.value)}
          placeholder="<iframe>...</iframe>"
        />
      </div>
      <button className="btn" onClick={handlePublishClick}>
        Publish Survey
      </button>
    </div>
  );
};

export default HRPage;
