import React from 'react';
import { Switch } from '@chips/core';

const SwitchDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Basic Switch</h2>
      <div className="d-flex demo-section-container">
        <div>
          <Switch checked />
          <Switch color="primary" />
          <Switch color="secondary" />
          <Switch
            color="secondary"
            checked
            disabled
            onChange={event => {
              console.log('event: ', event.target.checked);
            }}
          />
          <Switch
            color="success"
            onChange={event => {
              console.log('event: ', event.target.checked);
            }}
          />
          <Switch
            color="warning"
            onChange={event => {
              console.log('event: ', event.target.checked);
            }}
          />
        </div>
      </div>
      <hr />
      <h2>Switch with text</h2>
      <div className="d-flex demo-section-container">
        <div>
          <Switch value="Diet" />
          <Switch value="Fatloss" color="primary" />
          <Switch value="Fitness" color="secondary" />
          <Switch
            value="Bodybuilding"
            color="success"
            onChange={event => {
              console.log('event: ', event.target.checked);
              console.log('event: ', event.target.value);
            }}
          />
          <Switch value="Lose weight" disabled color="success" />
          <Switch value="Just eat" color="warning" checked disabled />
        </div>
      </div>
    </div>
  );
};

export default SwitchDemo;
