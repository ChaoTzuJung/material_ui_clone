import React, { useState } from 'react';
import { Button, Notification } from '@chips/core';

interface Position {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

type Color = 'default' | 'primary' | 'secondary' | 'success' | 'warning';

const NotificationDemo = (): JSX.Element => {
  const [position, setPosition] = useState<Position>({
    vertical: 'top',
    horizontal: 'right'
  });
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<Color>('default');

  const handleClicked = (position: Position, color: Color) => {
    setPosition(position);
    setColor(color);
    setOpen(true);
  };

  return (
    <div>
      <h2>Notification</h2>
      <div className="d-flex space-evenly demo-section-container">
        <Button
          onClick={() =>
            handleClicked({ vertical: 'top', horizontal: 'left' }, 'primary')
          }
          color="primary"
          variant="contained"
        >
          top-left
        </Button>
        <Button
          onClick={() =>
            handleClicked(
              { vertical: 'top', horizontal: 'center' },
              'secondary'
            )
          }
          color="secondary"
          variant="outlined"
        >
          top-center
        </Button>
        <Button
          onClick={() =>
            handleClicked({ vertical: 'top', horizontal: 'right' }, 'success')
          }
          color="success"
          variant="contained"
        >
          top-right
        </Button>
        <Button
          onClick={() =>
            handleClicked({ vertical: 'bottom', horizontal: 'left' }, 'warning')
          }
          color="warning"
          variant="outlined"
        >
          bottom-left
        </Button>
        <Button
          onClick={() =>
            handleClicked(
              { vertical: 'bottom', horizontal: 'center' },
              'default'
            )
          }
          color="default"
          variant="contained"
        >
          bottom-center
        </Button>
        <Button
          onClick={() =>
            handleClicked(
              { vertical: 'bottom', horizontal: 'right' },
              'primary'
            )
          }
          color="primary"
          variant="outlined"
        >
          bottom-right
        </Button>
      </div>
      <Notification
        open={open}
        message="This is notification"
        position={position}
        color={color}
        onClose={() => setOpen(false)}
        closeOnClickOutside
        autoHideDuration={3000}
      />
    </div>
  );
};

export default NotificationDemo;
