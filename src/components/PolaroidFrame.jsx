// src/components/PolaroidFrame.jsx
import React from 'react';

const PolaroidFrame = ({ image, border, caption, font, captionColor }) => {
  return (
    <div className={`polaroid-frame ${border}`}>
      <div className="polaroid-image-container">
        {image ? (
          <img src={image} alt="polaroid content" />
        ) : (
          <p style={{ color: '#888' }}>Upload an image to start</p>
        )}
      </div>
      <p className={`polaroid-caption ${font} ${captionColor}`}>{caption}</p>
    </div>
  );
};

export default PolaroidFrame;