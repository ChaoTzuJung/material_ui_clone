import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '@chips/core/components/card/Card';

import { Button } from '@chips/core/components/button/Button';
import { List, ListItem, ListItemText } from '@chips/core/components/list/List';
import { Shade } from '@chips/core/components/shade/Shade';

export default {
  title: 'Components/Shade',
  component: Shade
} as ComponentMeta<typeof Shade>;

export const Default: ComponentStory<typeof Shade> = args => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        SHOW BACKDROP
      </Button>
      <Shade {...args} open={isOpen} onClick={handleClose}>
        <Card style={{ width: '200px', height: 'auto', background: 'white' }}>
          <List>
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
        </Card>
      </Shade>
    </>
  );
};
