import React, { useState } from 'react';
import { Card } from '@chips/core';
import { SiAsus, SiApple, SiAirbnb } from 'react-icons/si';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import './cardDemo.scss';

const CardDemo = (): JSX.Element => {
  const [selectedAsus, setSelectedAsus] = useState(false);
  const [selectedApple, setSelectedApple] = useState(false);
  const [selectedAirbnb, setSelectedAirbnb] = useState(false);

  return (
    <div>
      <h2>Cards</h2>
      <Card className="card-demo">
        <Card
          onClick={() => setSelectedAsus(!selectedAsus)}
          variant="elevated"
          className={'card-demo__card' + (selectedAsus ? '--active' : '')}
        >
          <AiOutlineCheckCircle className="card-demo__check" />
          <SiAsus className="card-demo__icon" />
        </Card>
        <Card
          onClick={() => setSelectedApple(!selectedApple)}
          variant="round"
          className={'card-demo__card' + (selectedApple ? '--active' : '')}
        >
          <AiOutlineCheckCircle className="card-demo__check" />
          <SiApple className="card-demo__icon" />
        </Card>
        <Card
          onClick={() => setSelectedAirbnb(!selectedAirbnb)}
          variant="square"
          className={'card-demo__card' + (selectedAirbnb ? '--active' : '')}
        >
          <AiOutlineCheckCircle className="card-demo__check" />
          <SiAirbnb className="card-demo__icon" />
        </Card>
      </Card>
    </div>
  );
};

export default CardDemo;
