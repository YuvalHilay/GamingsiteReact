import React, { useState } from 'react';

function NumberDisplay() {
  const [number, setNumber] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = ['red', 'yellow', 'blue'];

  const increment = () => {
    setNumber(number + 1);
  };

  const reset = () => {
    setNumber(5);
    setCurrentColorIndex(0);
  };

  const toggleColor = () => {
    const nextColorIndex =
      (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  };

  const currentColor = colors[currentColorIndex];

  const numberStyle = {
    color: currentColor,
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '36px', // Increase font size to 36px
    padding: '10px 20px', // Increase padding for the number display
  };

  const buttonStyle = {
    fontSize: '24px', // Increase font size for the buttons
    padding: '10px 20px', // Increase padding for the buttons
  };

  return (
    <div>
      <h1 style={numberStyle} onClick={toggleColor}>
        {number}
      </h1>
      <button style={buttonStyle} onClick={increment}>
        Increment
      </button>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default NumberDisplay;
