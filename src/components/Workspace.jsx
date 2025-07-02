// src/components/Workspace.jsx
import React from 'react';
import { Rnd } from 'react-rnd';
import PolaroidFrame from './PolaroidFrame'; // Importing our new component

const Workspace = ({
  polaroidRef,
  image,
  border,
  caption,
  font,
  captionColor,
  stickers
}) => {
  return (
    <div className="workspace">
      {/* This wrapper is the capture target for downloading */}
      <div ref={polaroidRef} style={{ position: 'relative' }}>
        
        {/* Render the Polaroid Frame Component */}
        <PolaroidFrame
          image={image}
          border={border}
          caption={caption}
          font={font}
          captionColor={captionColor}
        />
        
        {/* Render the Draggable Stickers */}
        {stickers.map((sticker) => (
          <Rnd
            key={sticker.id}
            default={{
              x: sticker.x,
              y: sticker.y,
              width: sticker.width,
              height: sticker.height,
            }}
            lockAspectRatio={true}
            bounds="parent"
          >
            <img
              src={sticker.img}
              alt="sticker"
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            />
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default Workspace;