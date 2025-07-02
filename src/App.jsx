// src/App.jsx
import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';

// Import our new components
import ControlsPanel from './components/ControlsPanel';
import Workspace from './components/Workspace';
import Footer from './components/Footer';

// Import the main stylesheet
import './styles/App.css';

function App() {
  // All state now lives in the top-level component
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('My Polaroid');
  const [font, setFont] = useState('font-casual');
  const [border, setBorder] = useState('border-classic');
  const [captionColor, setCaptionColor] = useState('color-dark');
  const [stickers, setStickers] = useState([]);

  // Ref for the download functionality
  const polaroidRef = useRef(null);
  
  // --- CONFIGURABLE FOOTER URLS ---
  // You can easily change your links here!
  const GITHUB_URL = "https://github.com/shvbhii/Polaroid-Maker.git";
  const LINKEDIN_URL = "https://www.linkedin.com/in/shvbhi";


  // All handler functions also live here
  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const addSticker = (stickerImg) => {
    const newSticker = {
      id: Date.now(),
      img: stickerImg,
      x: 20, y: 20, width: 80, height: 80,
    };
    setStickers([...stickers, newSticker]);
  };

  const downloadImage = () => {
    if (polaroidRef.current) {
      htmlToImage.toPng(polaroidRef.current)
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.download = `polaroid-by-shubhi.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error('Oops, something went wrong!', error);
        });
    }
  };

  return (
    // A main wrapper for layout
    <div className="page-wrapper">
      <div className="app-container">
        <ControlsPanel
          caption={caption}
          setCaption={setCaption}
          captionColor={captionColor}
          setCaptionColor={setCaptionColor}
          font={font}
          setFont={setFont}
          border={border}
          setBorder={setBorder}
          handleImageUpload={handleImageUpload}
          addSticker={addSticker}
          downloadImage={downloadImage}
        />
        <Workspace
          polaroidRef={polaroidRef}
          image={image}
          border={border}
          caption={caption}
          font={font}
          captionColor={captionColor}
          stickers={stickers}
        />
      </div>
      <Footer githubUrl={GITHUB_URL} linkedinUrl={LINKEDIN_URL} />
    </div>
  );
}

export default App;