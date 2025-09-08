import React, { useState } from 'react';
import './App.css';
import lokahPosterUrl from './assets/lokah-poster.jpg';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [letterRevealed, setLetterRevealed] = useState(false);
  const [response, setResponse] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleEnvelopeClick = () => {
    setEnvelopeOpened(true);
    setTimeout(() => {
      setLetterRevealed(true);
    }, 800);
  };

  const handleResponse = (answer) => {
    setResponse(answer);
    if (answer === 'yes') {
      setShowDetails(true);
    }
  };

  return (
    <div className="app">
      {/* Animated background elements */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="hearts">
        <div className="heart">💕</div>
        <div className="heart">💖</div>
        <div className="heart">💗</div>
        <div className="heart">💝</div>
        <div className="heart">💞</div>
        <div className="heart">💟</div>
      </div>

      {/* Envelope Animation */}
      {!envelopeOpened && (
        <div className="envelope-container" onClick={handleEnvelopeClick}>
          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-body"></div>
            <div className="envelope-seal">💌</div>
          </div>
          <div className="envelope-instruction">
            <p>Click to open your special invitation from Saje✨</p>
          </div>
        </div>
      )}

      {/* Letter sliding out animation */}
      {envelopeOpened && (
        <div className={`letter-container ${letterRevealed ? 'revealed' : ''}`}>
          <div className="invitation-card">
        {/* Movie Poster Background */}
        <div className="poster-background">
          <img 
            src={lokahPosterUrl}
            alt="LOKAH Chapter 1 Chandra Movie Poster" 
            className="poster-image"
          />
          <div className="fire-overlay"></div>
          <div className="smoke-overlay"></div>
        </div>

        {/* Content */}
        <div className="content">
          <div className="presenter">DULQUER SALMAAN PRESENTS</div>
          
          <h1 className="movie-title">LOKAH</h1>
          <div className="subtitle">CHAPTER 1 CHANDRA</div>
          
          <div className="main-question">
            <span className="tamil-text">Movie போலாமா?</span>
          </div>
          
          <div className="romantic-message">
            <p>Miss Madhu, would you like to go? 💕</p>
          </div>

          {!response ? (
            <div className="response-buttons">
              <button 
                className="yes-button"
                onClick={() => handleResponse('yes')}
              >
                <span className="button-emoji">💖</span>
                <span>Yes, let's go!</span>
              </button>
              <button 
                className="no-button"
                onClick={() => handleResponse('no')}
              >
                <span className="button-emoji">😢</span>
                <span>Maybe next time</span>
              </button>
            </div>
          ) : response === 'yes' ? (
            <div className="success-message">
              <div className="celebration">🎉✨🎊</div>
              <h2>Yay! I'm so excited! 💕</h2>
              {showDetails && (
                <div className="movie-details">
                  <div className="detail-item">
                    <span className="detail-label">📅 Date:</span>
                    <span className="detail-value">Today</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">🕰️ Time:</span>
                    <span className="detail-value">8:00 PM</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">🎬 Location:</span>
                    <span className="detail-value">Carnival Cinemas Singapore</span>
                  </div>
                </div>
              )}
              <p className="love-note">Can't wait to watch the movie with you! </p>
            </div>
          ) : (
            <div className="sad-message">
              <div className="sad-emoji">😢💔</div>
              <h2>That's okay</h2>
              <p>Maybe we can plan another time</p>
              <button 
                className="retry-button"
                onClick={() => setResponse(null)}
              >
                Change my mind 👻
              </button>
            </div>
          )}
        </div>

        {/* Credits */}
        <div className="credits">
          <div className="credit-line">WRITER DIRECTOR DOMINIC ARUN</div>
          <div className="credit-line">PRODUCED BY WAYFARER FILMS</div>
          <div className="year">2025</div>
        </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
