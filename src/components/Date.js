import React, { useState, useEffect } from 'react';

export default function DateComponent() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {currentTime}.</h2>
    </div>
  );
}
