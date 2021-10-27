import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImNotification } from 'react-icons/im';
import { Button } from '@chips/core/components/button/Button';
import { Tooltip } from '@chips/core/components/tooltip/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    Story => (
      <div style={{ margin: '160px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <Tooltip {...args}>{args.children}</Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  children: <Button>Hover me!</Button>,
  title: 'This is Simple tooltip'
};

export const WithArrow = Template.bind({});
WithArrow.args = {
  children: <Button>Hover me!</Button>,
  title: 'This is tooltip with arrow',
  arrow: true
};

export const WithPositioned = Template.bind({});
WithPositioned.args = {
  children: <Button>Hover me!</Button>,
  title: (
    <div>
      Simple tooltip 1<br />
      Simple tooltip 2<br />
      Simple tooltip 3
    </div>
  ),
  placement: 'top-start'
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  children: <Button>Hover me! HA HA HA HA</Button>,
  title: (
    <div
      style={{ display: 'flex', alignItems: 'center', whiteSpace: 'normal' }}
    >
      <ImNotification style={{ marginRight: 4 }} />
      <span>This is tooltip title with icon</span>
    </div>
  )
};

export const WithClickTrigger = Template.bind({});
WithClickTrigger.args = {
  children: <Button>Click me!</Button>,
  title: 'This is Simple tooltip',
  trigger: 'click'
};
