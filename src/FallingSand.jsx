import React, { useState, useEffect, useCallback } from 'react';

// Similar to jason.today's focus on efficient DOM manipulation
// This component renders a grid that updates frequently
const FallingSand = () => {
  const [grid, setGrid] = useState([]);
  const rows = 50;
  const cols = 50;

  // Initialize empty grid
  useEffect(() => {
    setGrid(Array(rows).fill(0).map(() => Array(cols).fill(0)));
  }, []);

  // Update simulation
  const update = useCallback(() => {
    setGrid(prevGrid => {
      const nextGrid = prevGrid.map(row => [...row]);
      // Simulation logic here (e.g., move sand down)
      return nextGrid;
    });
  }, []);

  // Use requestAnimationFrame for high-performance updates
  useEffect(() => {
    const interval = setInterval(update, 50);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 10px)` }}>
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            style={{
              width: '10px',
              height: '10px',
              background: cell ? 'peru' : '#eee',
              border: '1px solid #ccc'
            }}
          />
        ))
      )}
    </div>
  );
};

export default FallingSand;
