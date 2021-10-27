import React from 'react';
import { Tooltip, Button } from '@chips/core';

import './tooltipDemo.scss';

const TooltipDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Basic tooltip</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Tooltip title="This is basic tooltip">
          <Button>Hover me!</Button>
        </Tooltip>
      </div>
      <hr />
      <h2>Positioned tooltips</h2>
      <div className="d-flex positioned-tooltips">
        <div className="d-flex top">
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="top-start">
              <Button>TOP-START</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="top">
              <Button>TOP</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="top-end">
              <Button>TOP-END</Button>
            </Tooltip>
          </div>
        </div>
        <div className="d-flex right">
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="right-start">
              <Button style={{ height: 60 }}>RIGHT-START</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="right">
              <Button style={{ height: 60 }}>RIGHT</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="right-end">
              <Button style={{ height: 60 }}>RIGHT-END</Button>
            </Tooltip>
          </div>
        </div>
        <div className="d-flex bottom">
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="bottom-start">
              <Button>BOTTOM-START</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="bottom">
              <Button>BOTTOM</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="bottom-end">
              <Button>BOTTOM-END</Button>
            </Tooltip>
          </div>
        </div>
        <div className="d-flex left">
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="left-start">
              <Button style={{ height: 60 }}>LEFT-START</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="left">
              <Button style={{ height: 60 }}>LEFT</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" placement="left-end">
              <Button style={{ height: 60 }}>LEFT-END</Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <hr />
      <h2>Arrow tooltips</h2>
      <div className="d-flex arrow-tooltips">
        <Tooltip title="Add" arrow>
          <Button>Hover me!</Button>
        </Tooltip>
      </div>
      <hr />
      <h2>Different triggers</h2>
      <div className="d-flex trigger-tooltips">
        <div style={{ margin: 12 }}>
          <Tooltip title="Add" trigger="hover">
            <Button>HOVER</Button>
          </Tooltip>
        </div>
        <div style={{ margin: 12 }}>
          <Tooltip title="Add" trigger="click">
            <Button>CLICK</Button>
          </Tooltip>
        </div>
      </div>
      <hr />

      {/* TODO:
        <h2>Different variant</h2>
        <div className="d-flex variant-tooltips">
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" variant="elevated">
              <Button>Hover me!</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" variant="square">
              <Button>Hover me!</Button>
            </Tooltip>
          </div>
          <div style={{ margin: 12 }}>
            <Tooltip title="Add" variant="round">
              <Button>Hover me!</Button>
            </Tooltip>
          </div>
        </div>
      */}
    </div>
  );
};

export default TooltipDemo;
