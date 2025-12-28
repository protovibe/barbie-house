import React, { useEffect, useState } from 'react';

const Sparkles = ({ trigger }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (trigger > 0) {
      // Create multiple sparkles at random positions
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: 50 + (Math.random() - 0.5) * 100,
        y: 50 + (Math.random() - 0.5) * 150,
        delay: Math.random() * 0.2,
        size: 15 + Math.random() * 20,
      }));

      setSparkles(newSparkles);

      // Clear sparkles after animation
      const timer = setTimeout(() => {
        setSparkles([]);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (sparkles.length === 0) return null;

  return (
    <div className="sparkles-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
