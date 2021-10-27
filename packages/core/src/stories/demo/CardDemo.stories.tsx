import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiAsus } from 'react-icons/si';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { Card } from '@chips/core/components/card/Card';
import CardDemo from '@chips/web/src/pages/cell/cardDemo/CardDemo';

export default {
  title: 'Demo/CardDemo',
  component: CardDemo
} as ComponentMeta<typeof CardDemo>;

const Template: ComponentStory<typeof CardDemo> = () => <CardDemo />;

const ComplexTemplate: ComponentStory<typeof Card> = args => {
  const [selectedAsus, setSelectedAsus] = useState(false);

  return (
    <Card
      variant="elevated"
      onClick={() => setSelectedAsus(prev => !prev)}
      className={'card-demo__card' + (selectedAsus ? '--active' : '')}
      {...args}
    >
      <AiOutlineCheckCircle className="card-demo__check" />
      <SiAsus className="card-demo__icon" />
    </Card>
  );
};

export const Default = ComplexTemplate.bind({});

export const Demo = Template.bind({});
