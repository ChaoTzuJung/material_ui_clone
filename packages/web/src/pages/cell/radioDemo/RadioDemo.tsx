import React from 'react';
import { Radio } from '@chips/core';

const RadioDemo = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState('b-option');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Basic Radio</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Radio name="eats" />
        <Radio name="eats" color="primary" />
        <Radio name="eats" color="secondary" />
        <Radio name="eats" color="success" />
        <Radio name="eats" color="warning" />
      </div>
      <hr />
      <h2>Radio with Text</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Radio
          name="food"
          value="p-option"
          onChange={handleChange}
          color="primary"
        >
          Pizza
        </Radio>
        <Radio
          name="food"
          value="b-option"
          onChange={handleChange}
          checked={selectedValue === 'b-option'}
          color="secondary"
        >
          Bacon
        </Radio>
        <Radio
          name="food"
          value="c-option"
          onChange={handleChange}
          color="success"
        >
          Cookies
        </Radio>
        <Radio
          name="food"
          value="f-option"
          onChange={handleChange}
          color="warning"
        >
          Fried chicken
        </Radio>
        <Radio name="food" value="n-option" onChange={handleChange} disabled>
          None of above
        </Radio>
      </div>
    </div>
  );
};

export default RadioDemo;
