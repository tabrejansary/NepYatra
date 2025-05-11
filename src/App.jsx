import React, { useState, useEffect } from 'react';
import Hero from './components/custom/Hero';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // Diamond pattern with darker colors
  const dotPositions = [
    [0,2], [1,1], [1,3], 
    [2,0], [2,2], [2,4],
    [3,1], [3,3], [4,2]
  ];

  return (
    <>
      {isLoading && (
        <div className="splash-diamond-dark">
          <div className="diamond-grid-dark">
            {dotPositions.map(([row, col], index) => (
              <div 
                key={`${row}-${col}`}
                className="diamond-dot-dark"
                style={{
                  gridRow: row + 1,
                  gridColumn: col + 1,
                  animationDelay: `${index * 0.12}s`,
                  backgroundColor: row === 2 && col === 2 ? '#e74c3c' : '#f0a399'
                }}
              />
            ))}
          </div>
          <h1 className="diamond-title-dark">NepYatra</h1>
        </div>
      )}

      {!isLoading && <Hero />}
    </>
  );
}

export default App;