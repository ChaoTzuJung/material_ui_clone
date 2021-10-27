import React from 'react';
import { Select, Option } from '@chips/core';

const SelectDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Select</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Select
          variant="outlined"
          label="outlined"
          defaultValue={20}
          onChange={(event, value) => console.log('onChange: ', event, value)}
        >
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>
            <em>123123</em>
          </Option>
          <Option value={20}>456456456</Option>
        </Select>
        <Select variant="contained" label="contained">
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>123123123123123123</Option>
          <Option value={20}>
            456456456456456456456456456456456456456456456456456456
          </Option>
        </Select>
        <Select variant="text" label="text" defaultValue={10}>
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
        <Select variant="underlined" label="underlined">
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
      </div>
      <div className="d-flex space-evenly demo-section-container">
        <Select variant="capsuleOutlined" label="capsuleOutlined">
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
        <Select variant="capsuleContained" label="capsuleContained">
          <Option value="">
            <em>None</em>
          </Option>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
      </div>

      <h2>Select without label</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Select
          variant="outlined"
          defaultValue={20}
          onChange={(event, value) => console.log('onChange: ', event, value)}
        >
          <Option value={10}>
            <em>123123</em>
          </Option>
          <Option value={20}>456456456</Option>
        </Select>
        <Select variant="contained" defaultValue={20}>
          <Option value={10}>123123123123123123</Option>
          <Option value={20}>
            456456456456456456456456456456456456456456456456456456
          </Option>
        </Select>
        <Select variant="text" defaultValue={10}>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
        <Select variant="underlined" defaultValue={20}>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
      </div>
      <div className="d-flex space-evenly demo-section-container">
        <Select variant="capsuleOutlined" defaultValue={20}>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
        <Select variant="capsuleContained" defaultValue={20}>
          <Option value={10}>123123</Option>
          <Option value={20}>456456456</Option>
        </Select>
      </div>
    </div>
  );
};

export default SelectDemo;
