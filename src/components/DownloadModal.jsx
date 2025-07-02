// src/components/DownloadModal.jsx
import React from 'react';
import '../styles/DownloadModal.css'; // We will create this file next

const DownloadModal = ({ generatedImage, onClose }) => {
  // If there's no image data, don't render anything
  if (!generatedImage) {
    return null;
  }

  // Prevent the modal from closing when clicking on the content inside it
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // The onClick on the overlay allows closing the modal by clicking the background
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <h3>Your Polaroid is Ready!</h3>
        <p className="modal-instructions">
          Tap and hold the image, then select "Save to Photos" or "Download Image".
        </p>
        <div className="modal-image-container">
          <img src={generatedImage} alt="Generated Polaroid" />
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;