import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BsThreeDots } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';

import { Breadcrumbs } from '@chips/core/components/breadcrumbs/Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = args => (
  <Router>
    <Breadcrumbs {...args}>
      {/* TODO: Link 元件上的color與hover等效果在Link元件上做 */}
      <Link to="/">ASUS</Link>
      <Link to="/6F">6F</Link>
      <Link to="/AOCC">AOCC</Link>
      <Link to="/FE">FE</Link>
      <span>Sam</span>
    </Breadcrumbs>
  </Router>
);

const CollapsedTemplate: ComponentStory<typeof Breadcrumbs> = args => (
  <Router>
    <Breadcrumbs collapseButtonChildren={<BsThreeDots />} {...args}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </Breadcrumbs>
  </Router>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: <MdNavigateNext />
};

export const CollapsedBreadcrumbs = CollapsedTemplate.bind({});
CollapsedBreadcrumbs.args = {
  maxItems: 4,
  itemsAfterCollapse: 2,
  itemsBeforeCollapse: 2
};
