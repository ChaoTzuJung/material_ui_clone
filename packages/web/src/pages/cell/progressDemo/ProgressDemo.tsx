import React from 'react';
import { Progress } from '@chips/core';

const ProgressDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Progress with different color</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Progress color="default" />
        <Progress color="primary" />
        <Progress color="secondary" />
        <Progress color="success" />
        <Progress color="warning" />
      </div>
      <hr />
      <h2>Progress with different size</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Progress size={16} />
        <Progress size={24} />
        <Progress size={32} />
        <Progress size={40} />
        <Progress size={48} />
      </div>
      <hr />
      <h2>Progress with different thickness of contour</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Progress thickness={1} />
        <Progress thickness={1.5} />
        <Progress thickness={2} />
        <Progress thickness={2.5} />
        <Progress thickness={3} />
      </div>
    </div>
  );
};

export default ProgressDemo;
