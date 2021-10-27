import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Progress } from '@chips/core/components/progress/Progress';

export default {
  title: 'Components/Progress',
  component: Progress
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = args => (
  <Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thickness: 2,
  color: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
  thickness: 2,
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  thickness: 2,
  color: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  thickness: 2,
  color: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  thickness: 2,
  color: 'warning'
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  style: { color: 'red' },
  thickness: 2,
  color: 'warning'
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 36,
  thickness: 3
};
