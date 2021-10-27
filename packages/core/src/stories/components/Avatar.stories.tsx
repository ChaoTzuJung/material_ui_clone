import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BiRun } from 'react-icons/bi';
import hange from '@chips/web/assets/images/hange.png';
// import giant from '@chips/web/assets/guildline/images/giant.jpeg';

import { Avatar } from '@chips/core/components/avatar/Avatar';
// import { Badge } from '@chips/core/components/badge/Badge';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'circle'
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: 'circle',
  alt: 'Hange',
  src: hange
};

export const WithClickable = Template.bind({});
WithClickable.args = {
  variant: 'circle',
  onClick: () => alert('click!')
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  children: <BiRun />
};

// export const WithBadgeImage = Template.bind({});
// WithBadgeImage.args = {
//   badge: (
//     <Badge
//       anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
//       src={giant}
//     >
//       X
//     </Badge>
//   )
// };

// export const WithBadgeText = Template.bind({});
// WithBadgeText.args = {
//   badge: (
//     <Badge anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>2</Badge>
//   )
// };
