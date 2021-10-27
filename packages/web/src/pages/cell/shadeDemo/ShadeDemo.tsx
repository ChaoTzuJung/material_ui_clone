import React, { useState } from 'react';
import { Button, Card, List, ListItem, ListItemText, Shade } from '@chips/core';

const ShadeDemo = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        SHOW SHADE
      </Button>
      <Shade open={isOpen} onClick={handleClose}>
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

export default ShadeDemo;
