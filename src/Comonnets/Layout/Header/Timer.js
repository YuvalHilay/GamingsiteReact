import React, { useState, useEffect } from 'react';
import "./Timer.css";

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the current time every second
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the time as "00:00:00"
  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="Timer"> {/* Apply the "Timer" class here */}
      <p>{formatTime(currentTime)}</p>
    </div>
  );
}

export default Timer;
