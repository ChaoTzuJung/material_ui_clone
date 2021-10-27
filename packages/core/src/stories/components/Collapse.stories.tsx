import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@chips/core/components/button/Button';
import { Collapse } from '@chips/core/components/collapse/Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse
} as ComponentMeta<typeof Collapse>;

export const Default: ComponentStory<typeof Collapse> = args => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  return (
    <>
      <Button onClick={() => setIsOpen(pre => !pre)}>open</Button>
      <Collapse {...args} isOpen={isOpen}>
        Collapsed Text
      </Collapse>
    </>
  );
};
