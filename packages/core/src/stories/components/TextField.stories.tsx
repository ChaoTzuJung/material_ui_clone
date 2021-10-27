import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '@chips/core/components/textField/TextField';

export default {
  title: 'Components/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Name'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Name',
  variant: 'filled'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Name',
  variant: 'outlined'
};

export const Number = Template.bind({});
Number.args = {
  label: 'Age',
  type: 'number'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password'
};
