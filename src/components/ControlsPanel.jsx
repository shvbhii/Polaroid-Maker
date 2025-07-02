// src/components/ControlsPanel.jsx
import React from 'react';

// Import sticker images to display them in the panel
import heartSticker from '../assets/stickers/heart.png';
import starSticker from '../assets/stickers/star.png';
import tapeSticker from '../assets/stickers/tape.png';

// This is a "presentational" component. It receives all its data and functions as props.
const ControlsPanel = ({
  caption,
  setCaption,
  captionColor,
  setCaptionColor,
  font,
  setFont,
  border,
  setBorder,
  handleImageUpload,
  addSticker,
  downloadImage,
}) => {
  return (
    <div className="controls-panel">
      <h2>Polaroid Maker</h2>
      <p className="watermark">- by Shubhi Sharma -</p>

      <div className="control-group">
        <label htmlFor="image-upload">1. Upload Photo</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      <div className="control-group">
        <label htmlFor="caption-input">2. Add Caption</label>
        <input
          type="text"
          id="caption-input"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label htmlFor="color-picker">Caption Color</label>
        <select id="color-picker" value={captionColor} onChange={(e) => setCaptionColor(e.target.value)}>
          <option value="color-dark">Dark</option>
          <option value="color-light">Light</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="font-picker">3. Choose Font</label>
        <select id="font-picker" value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="font-casual">Casual</option>
          <option value="font-vintage">Vintage</option>
          <option value="font-marker">Bold Marker</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="border-picker">4. Choose Border</label>
        <select id="border-picker" value={border} onChange={(e) => setBorder(e.target.value)}>
          <option value="border-classic">Classic White</option>
          <option value="border-vintage">Aged Paper</option>
          <option value="border-pink">Pink Texture</option>
          <option value="border-blue">Blue Texture</option>
          <option value="border-black">Black Texture</option>
        </select>
      </div>
      
      <div className="control-group">
        <label>5. Add Stickers</label>
        <div className="sticker-pack">
          <img src={heartSticker} alt="heart" className="sticker-item" onClick={() => addSticker(heartSticker)} />
          <img src={starSticker} alt="star" className="sticker-item" onClick={() => addSticker(starSticker)} />
          <img src={tapeSticker} alt="tape" className="sticker-item" onClick={() => addSticker(tapeSticker)} />
        </div>
      </div>

      <button onClick={downloadImage} className="download-btn">
        Download Polaroid
      </button>
    </div>
  );
};

export default ControlsPanel;