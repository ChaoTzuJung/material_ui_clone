import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '@chips/core/components/radio/Radio';

export default {
  title: 'Components/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => (
  <div>
    <Radio {...args} value="az" name="radio-button-demo">
      AstraZeneca
    </Radio>
    <Radio {...args} value="bnt" name="radio-button-demo">
      BioNTech
    </Radio>
    <Radio {...args} value="moderna" name="radio-button-demo">
      Moderna
    </Radio>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  color: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
