import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@chips/core/components/button/Button';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

const CustomTemplate: ComponentStory<typeof Button> = args => {
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
    <Button
      variant="contained"
      color="primary"
      style={{ width: '150px' }}
      disabled={processing}
      {...args}
      onClick={simulateProcessing}
    >
      {buttonContent}
    </Button>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'button',
  color: 'default',
  disabled: false,
  variant: 'contained'
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
  color: 'primary',
  disabled: false,
  variant: 'contained'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'button',
  color: 'secondary',
  disabled: false,
  variant: 'contained'
};

export const Success = Template.bind({});
Success.args = {
  children: 'button',
  color: 'success',
  disabled: false,
  variant: 'contained'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'button',
  color: 'warning',
  disabled: false,
  variant: 'contained'
};

export const InProgress = CustomTemplate.bind({});
InProgress.args = {
  color: 'primary',
  variant: 'contained'
};
