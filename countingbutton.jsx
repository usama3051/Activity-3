

import React, { useState, useEffect } from 'react';

const ClickCounter = () => {

  const [clickCount, setClickCount] = useState(0);

  
  useEffect(() => {
    document.title = `Click count: ${clickCount}`;
  }, [clickCount]); 

  
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Current count: {clickCount}</p>
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
};

export default ClickCounter;
