import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="title-sparkle">✨</span>
          Barbie Dream House
          <span className="title-sparkle">✨</span>
        </h1>
        <p className="welcome-subtitle">Dress up Barbie and explore the rooms!</p>

        <div className="welcome-barbie">
          <svg viewBox="0 0 100 150" className="mini-barbie">
            {/* Simple Barbie silhouette */}
            <ellipse cx="50" cy="30" rx="20" ry="25" fill="#FDBBB5" />
            <ellipse cx="50" cy="25" rx="25" ry="30" fill="#F4D03F" />
            <path d="M35 25 Q50 10 65 25 Q55 20 50 18 Q45 20 35 25" fill="#D4AC0D" />
            <ellipse cx="45" cy="28" rx="3" ry="2" fill="#5D4E37" />
            <ellipse cx="55" cy="28" rx="3" ry="2" fill="#5D4E37" />
            <path d="M45 38 Q50 42 55 38" stroke="#FF69B4" strokeWidth="2" fill="none" />
            <path d="M35 55 L40 100 L60 100 L65 55 Q50 50 35 55" fill="#FF69B4" />
            <path d="M40 100 L35 145 L45 145 L47 100" fill="#FDBBB5" />
            <path d="M53 100 L55 145 L65 145 L60 100" fill="#FDBBB5" />
          </svg>
        </div>

        <button className="start-btn" onClick={onStart}>
          <span>Let's Play!</span>
          <span className="btn-sparkle">💖</span>
        </button>
      </div>

      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            💕
          </span>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
