import React, { useState } from 'react';
import { Shade, Progress, Button } from '@chips/core';

const LoadingDemo = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Loading</h2>
      <p>Click button and show loading component</p>
      <div className="demo-section-container">
        <Button onClick={handleClick}>Send</Button>
        <Shade open={isOpen}>
          <Progress color="primary" size={36} thickness={3} />
        </Shade>
      </div>
    </div>
  );
};

export default LoadingDemo;
