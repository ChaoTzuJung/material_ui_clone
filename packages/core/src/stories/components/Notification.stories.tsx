import React, { useState, useEffect, Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '@chips/core/src/components/notification/Notification';
import { Button } from '@chips/core/src/components/button/Button';

export default {
  title: 'Components/Notification',
  component: Notification
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = args => (
  <Notification {...args} />
);

const CustomTemplate: ComponentStory<typeof Notification> = args => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)} color="primary" variant="contained">
        top-right
      </Button>
      <Notification
        {...args}
        open={open}
        message="This is a notification"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'top', horizontal: 'right' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'top', horizontal: 'left' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'top', horizontal: 'center' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const TopRight = Template.bind({});
TopRight.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'top', horizontal: 'right' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const ButtomLeft = Template.bind({});
ButtomLeft.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'bottom', horizontal: 'left' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const ButtomCenter = Template.bind({});
ButtomCenter.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const ButtomRight = Template.bind({});
ButtomRight.args = {
  open: true,
  message: 'This is a notification',
  position: { vertical: 'bottom', horizontal: 'right' },
  autoHideDuration: 5000,
  color: 'default',
  closeOnClickOutside: false
};

export const WithButton = CustomTemplate.bind({});
WithButton.args = {
  open: false,
  position: { vertical: 'top', horizontal: 'right' },
  closeOnClickOutside: true
};
