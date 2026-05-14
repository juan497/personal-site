import React, { useState } from 'react';

const Banner = ({ message, type = 'info' }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`p-4 flex justify-between items-center ${type === 'error' ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
      <span>{message}</span>
      <button onClick={() => setIsVisible(false)} className="ml-4 font-bold">
        ✕
      </button>
    </div>
  );
};

export default Banner;