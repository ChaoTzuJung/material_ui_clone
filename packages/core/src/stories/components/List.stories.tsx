import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List, ListItem, ListItemText } from '@chips/core/components/list/List';

export default {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem, ListItemText }
} as ComponentMeta<typeof List>;

export const SingleItem: ComponentStory<typeof List> = args => (
  <List {...args}>
    <ListItem>
      <ListItemText>12345</ListItemText>
    </ListItem>
  </List>
);

export const MultipleItems: ComponentStory<typeof List> = args => (
  <List {...args}>
    <ListItem>
      <ListItemText>Ant</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>Bear</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>Cat</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>Dog</ListItemText>
    </ListItem>
  </List>
);
