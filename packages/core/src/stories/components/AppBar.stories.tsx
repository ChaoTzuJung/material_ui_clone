import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  AiOutlineBell,
  AiFillAndroid,
  AiFillApple,
  AiFillRedditCircle
} from 'react-icons/ai';

import { AppBar } from '@chips/core/compounds/appBar/AppBar';
import { Button } from '@chips/core/components/button/Button';

export default {
  title: 'Components/AppBar',
  component: AppBar
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = args => <AppBar {...args} />;

const AppBarContent = () => (
  <div>
    <Button
      className="appbar-button-wrapper"
      variant="text"
      onClick={() => {
        console.log('獻出你的心臟吧！');
      }}
    >
      <AiFillApple />
    </Button>
    <Button
      className="appbar-button-wrapper"
      variant="text"
      onClick={() => {
        console.log('獻出你的心臟吧！');
      }}
    >
      <AiFillAndroid />
    </Button>
    <Button
      className="appbar-button-wrapper"
      variant="text"
      onClick={() => {
        console.log('獻出你的心臟吧！');
      }}
    >
      <AiFillRedditCircle />
    </Button>
    <Button
      className="appbar-button-wrapper"
      variant="text"
      onClick={() => {
        console.log('獻出你的心臟吧！');
      }}
    >
      <AiOutlineBell />
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <AppBarContent />,
  style: { border: '1px solid #000' }
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
  children: <AppBarContent />,
  style: { border: '1px solid #000' }
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
  children: <AppBarContent />,
  style: { border: '1px solid #000' }
};
