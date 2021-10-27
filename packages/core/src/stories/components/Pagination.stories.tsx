import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '@chips/core/components/pagination/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => (
  <Pagination {...args} pageSize={30} />
);

export const Deafult = Template.bind({});
Deafult.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const HideArrowButton = Template.bind({});
HideArrowButton.args = {
  hidePrevButton: true,
  hideNextButton: true
};

export const ShowFirstAndLast = Template.bind({});
ShowFirstAndLast.args = {
  color: 'primary',
  defaultPage: 12,
  showFirstButton: true,
  showLastButton: true
};

export const ThreeSiblings = Template.bind({});
ThreeSiblings.args = {
  color: 'primary',
  defaultPage: 12,
  siblingCount: 3
};

export const ThreeBoundaries = Template.bind({});
ThreeBoundaries.args = {
  color: 'primary',
  defaultPage: 12,
  boundaryCount: 3
};
