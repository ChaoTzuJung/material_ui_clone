import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppBarDemo from '@chips/web/src/pages/compound/appBarDemo/AppBarDemo';

export default {
  title: 'Demo/AppBarDemo',
  component: AppBarDemo
} as ComponentMeta<typeof AppBarDemo>;

const Template: ComponentStory<typeof AppBarDemo> = () => <AppBarDemo />;

export const Demo = Template.bind({});
