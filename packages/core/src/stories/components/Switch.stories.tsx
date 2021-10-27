import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '@chips/core/components/switch/Switch';

export default {
  title: 'Components/Switch',
  component: Switch
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  checked: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  checked: true
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  checked: true
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: true
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  checked: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 'This is switch label'
};
