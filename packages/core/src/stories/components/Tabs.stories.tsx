import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from '@chips/core/components/tabs/Tabs';
import { Tab } from '@chips/core/components/tab/Tab';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    Tab
  }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => (
  <div className="d-flex" style={args.style}>
    <Tabs color="primary" {...args}>
      <Tab value="home">this is home</Tab>
      <Tab value="shop">
        New Arrivals in the Longest Text of Nonfiction that should appear in the
        next line
      </Tab>
      <Tab>blog</Tab>
      <Tab value="about">about</Tab>
      <Tab value="contact">contact</Tab>
      <Tab value="joanne">Joanne</Tab>
      <Tab value="jeff">Jeff</Tab>
      <Tab value="sam">Sam</Tab>
      <Tab value="singing" disabled>
        Singing
      </Tab>
    </Tabs>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  value: 'home',
  color: 'default',
  scrollable: false,
  scrollButtons: false
};

export const Scrollable = Template.bind({});

Scrollable.args = {
  value: 'shop',
  color: 'primary',
  scrollable: true,
  scrollButtons: true,
  style: { maxWidth: '480px' }
};
