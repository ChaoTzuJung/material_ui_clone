import React, { useState } from 'react';
import { Checkbox } from '@chips/core';

const CheckboxDemo = (): JSX.Element => {
  const [pizzaChecked, setPizzaChecked] = useState(true);
  const [baconChecked, setBaconChecked] = useState(false);
  const [cookiesChecked, setCookiesChecked] = useState(false);
  const [friedChickenChecked, setFriedChickenChecked] = useState(false);

  return (
    <div>
      <h2>Basic Checkbox</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Checkbox name="food" />
        <Checkbox name="food" color="primary" />
        <Checkbox name="food" color="secondary" />
        <Checkbox name="food" color="success" />
        <Checkbox name="food" color="warning" />
      </div>
      <hr />
      <h2>Checkbox with Text</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Checkbox
          name="food"
          value="pizza"
          onChange={() => setPizzaChecked(!pizzaChecked)}
          color="primary"
          checked={pizzaChecked}
          disabled
        >
          Pizza
        </Checkbox>
        <Checkbox
          name="food"
          value="bacon"
          onChange={() => setBaconChecked(!baconChecked)}
          color="secondary"
          disabled
        >
          Bacon
        </Checkbox>
        <Checkbox
          name="food"
          value="cookies"
          onChange={() => setCookiesChecked(!cookiesChecked)}
          color="success"
          checked={cookiesChecked}
        >
          Cookie
        </Checkbox>
        <Checkbox
          name="food"
          value="friedChicken"
          onChange={() => setFriedChickenChecked(!friedChickenChecked)}
          color="warning"
          checked={friedChickenChecked}
        >
          Fried chicken
        </Checkbox>
      </div>
    </div>
  );
};

export default CheckboxDemo;
