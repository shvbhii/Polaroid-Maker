// src/App.jsx
import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';

// Import our components
import ControlsPanel from './components/ControlsPanel';
import Workspace from './components/Workspace';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal'; // <-- Import the new modal

// Import the main stylesheet
import './styles/App.css';

function App() {
  // State for the modal
  const [generatedImage, setGeneratedImage] = useState(null);

  // Existing state
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('My Polaroid');
  const [font, setFont] = useState('font-casual');
  const [border, setBorder] = useState('border-classic');
  const [captionColor, setCaptionColor] = useState('color-dark');
  const [stickers, setStickers] = useState([]);

  const polaroidRef = useRef(null);
  
  const GITHUB_URL = "https://github.com/shvbhii/Polaroid-Maker.git";
  const LINKEDIN_URL = "https://www.linkedin.com/in/shvbhi/";

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const addSticker = (stickerImg) => {
    const newSticker = {
      id: Date.now(), img: stickerImg,
      x: 20, y: 20, width: 80, height: 80,
    };
    setStickers([...stickers, newSticker]);
  };

  // --- UPDATED DOWNLOAD FUNCTION ---
  const handleDownload = () => {
    if (!polaroidRef.current) return;

    // The 'pixelRatio' option can improve image quality on high-res screens
    htmlToImage.toPng(polaroidRef.current, { pixelRatio: 2 })
      .then(function (dataUrl) {
        // Instead of trying to force a download, we now show the modal
        setGeneratedImage(dataUrl);
      })
      .catch(function (error) {
        console.error('Oops, something went wrong!', error);
        alert('Sorry, there was an error creating the image.');
      });
  };

  return (
    <div className="page-wrapper">
      <div className="app-container">
        <ControlsPanel
          // ... (pass all existing props)
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
          // Pass the new handler to the download button
          downloadImage={handleDownload}
        />
        <Workspace
          // ... (pass all existing props)
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
      
      {/* Render the modal here. It will only be visible when generatedImage is not null. */}
      <DownloadModal 
        generatedImage={generatedImage} 
        onClose={() => setGeneratedImage(null)} 
      />
    </div>
  );
}

export default App;