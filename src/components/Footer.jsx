// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
import '../styles/Footer.css'; // We'll create this CSS file next

const Footer = ({ githubUrl, linkedinUrl }) => {
  return (
    <footer className="app-footer">
      <div className="footer-links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="footer-link-item">
          <FaLinkedin className="footer-icon" />
          <span>Connect via LinkedIn</span>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link-item">
          <FaGithub className="footer-icon" />
          <span>View Source on GitHub</span>
        </a>
      </div>
      <div className="footer-credit">
        Made by Shubhi Sharma
      </div>
    </footer>
  );
};

export default Footer;