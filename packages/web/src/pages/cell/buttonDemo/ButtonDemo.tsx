import React, { useState } from 'react';
import { Button } from '@chips/core';
import { SiAsus } from 'react-icons/si';

import './buttonDemo.scss';

const ButtonDemo = (): JSX.Element => {
  const [processing, setProcessing] = useState(false);
  const [buttonContent, setButtonContent] = useState<'Start' | 'In Process...'>(
    'Start'
  );

  const simulateProcessing = () => {
    setProcessing(true);
    setButtonContent('In Process...');

    const endProcess = setTimeout(() => {
      setProcessing(false);
      setButtonContent('Start');
    }, 2000);
    return () => clearTimeout(endProcess);
  };

  return (
    <div>
      <h2>Basic Buttons</h2>
      <div className="d-flex space-evenly demo-section-container">
        <div className="button-wrapper">
          <Button variant="text" color="primary">
            Text
          </Button>
        </div>
        <div className="button-wrapper">
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
        </div>
        <div className="button-wrapper">
          <Button variant="contained" color="success">
            Contained
          </Button>
        </div>
        <div className="button-wrapper">
          <Button variant="text" color="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="button-wrapper">
          <Button variant="outlined" color="secondary" disabled>
            Disabled
          </Button>
        </div>
        <div className="button-wrapper">
          <Button variant="contained" color="success" disabled>
            Disabled
          </Button>
        </div>
      </div>
      <hr />
      <h2>In Process Button</h2>
      <div className="button-wrapper demo-section-container">
        <Button
          variant="contained"
          color="primary"
          disabled={processing}
          onClick={simulateProcessing}
          style={{ width: '150px' }}
        >
          {buttonContent}
        </Button>
      </div>
      <hr />
      <h2>Icon Buttons in Different Shapes</h2>
      <div className="demo-section-container space-evenly d-flex">
        <div className="button-wrapper">
          <Button variant="outlined" color="primary" radius={40}>
            <SiAsus size={40} />
          </Button>
        </div>
        <div className="button-wrapper">
          <Button variant="text" color="primary" radius={15} shape="square">
            <SiAsus size={40} />
          </Button>
        </div>
        <div className="button-wrapper">
          <Button
            variant="contained"
            color="primary"
            radius={5}
            style={{ width: '50px', height: '50px' }}
          >
            <SiAsus size={40} />
          </Button>
        </div>
        <div className="button-wrapper">
          <Button
            variant="outlined"
            color="primary"
            disabled
            radius={5} //round的時候給radius他還是會是正圓
            shape="round"
          >
            <SiAsus size={40} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
