import React, { useState } from 'react';
import './box_cricket.css';
import Logo from "../assets/logo.png"; // Assuming you have the logo image
import { Link } from 'react-router-dom'; // Import Link to create navigation links

function UnifiedContainer() {
  const [selectedContent, setSelectedContent] = useState('details'); // Default content is "Details"
  const [activeLink, setActiveLink] = useState('details'); // To track the active link

  const content = {
    details: {
      date: "31 DEC",
      venue: "Ground",
      duration: "2-3 hours",
      glimpses: "YouTube Link",
    },
    rules: {
      Team: "6-8 players per side.",
      Misconduct: "Penalties for time delays or unsporting behavior.",
      Umpire_Decision: "Umpire’s decision is final. Arguing with the umpire is prohibited and may result in penalties.",
    },
    contact: {
      Head: "abc",
      Mobile: "967024065",
      CoHead: "abc",
      CoHeadMobile: "967024065",
    },
  };

  const renderContent = () => {
    const selectedData = content[selectedContent];

    if (selectedContent === 'details') {
      return (
        <>
          <p><strong>Date:</strong> {selectedData.date}</p>
          <p><strong>Duration:</strong> {selectedData.duration}</p>
          <p><strong>Venue:</strong> {selectedData.venue}</p>
          <p><strong>Glimpses:</strong> <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">{selectedData.glimpses}</a></p>
        </>
      );
    }

    if (selectedContent === 'rules') {
      return Object.entries(selectedData).map(([key, value]) => (
        <p key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</p>
      ));
    }

    if (selectedContent === 'contact') {
      return (
        <>
          <p><strong>Head:</strong> {selectedData.Head}</p>
          <p><strong>Mobile:</strong> {selectedData.Mobile}</p>
          <p><strong>Co-Head:</strong> {selectedData.CoHead}</p>
          <p><strong>Co-Head Mobile:</strong> {selectedData.CoHeadMobile}</p>
        </>
      );
    }

    return null;
  };

  const handleLinkClick = (contentType) => {
    setSelectedContent(contentType);
    setActiveLink(contentType);
  };

  return (
    <div className="single-container">
      <div className="header-section">
        <h1 className="title">Throwball</h1>
        <p className="description">
          Experience the thrill of cricket in a compact and exciting format.
          Throwball combines strategy and fun for an unforgettable sporting event.
        </p>
      </div>

      <div className="main-content">
        <div className="left-section">
          <img src={Logo} alt="Logo" className="logo" />
          <button className="register-btn">Register</button>
        </div>

        <div className="right-section">
          <div className="navigation">
            <Link 
              to="/" 
              onClick={() => handleLinkClick('details')} 
              className={activeLink === 'details' ? 'active' : ''}
            >
              Details
            </Link>
            <Link 
              to="/rules" 
              onClick={() => handleLinkClick('rules')} 
              className={activeLink === 'rules' ? 'active' : ''}
            >
              Rules
            </Link>
            <Link 
              to="/contact-us" 
              onClick={() => handleLinkClick('contact')} 
              className={activeLink === 'contact' ? 'active' : ''}
            >
              Contact Us
            </Link>
          </div>

          <div className="content-box">
            <div className="content-details">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnifiedContainer;
