import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MdClose } from 'react-icons/md';

import { Button } from '@chips/core/components/button/Button';
import { Card } from '@chips/core/components/card/Card';
import { Dialog } from '@chips/core/components/dialog/Dialog';
import { DialogTitle } from '@chips/core/components/dialogTitle/DialogTitle';
import { DialogContent } from '@chips/core/components/dialogContent/DialogContent';
import { DialogActions } from '@chips/core/components/dialogActions/DialogActions';

export default {
  title: 'Components/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = args => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button onClick={() => setIsOpen(pre => !pre)} variant="contained">
        open
      </Button>
      <Dialog {...args} open={isOpen} onShadeClick={() => setIsOpen(false)}>
        <Card
          style={{
            position: 'relative',
            display: 'flex',
            margin: '0 20px',
            width: '100%',
            maxWidth: '550px',
            height: 'auto',
            maxHeight: 'calc(100vh - 40px)',
            background: '#fff',
            flexDirection: 'column'
          }}
        >
          <DialogTitle>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  margin: 0,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  lineHeight: 1.6,
                  letterSpacing: '0.0075rem'
                }}
              >
                This is dialog title
              </div>
              <MdClose
                style={{ cursor: 'pointer' }}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </DialogTitle>
          <DialogContent>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
            bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={() => setIsOpen(pre => !pre)}>
              DISAGREE
            </Button>
            <Button variant="text" onClick={() => setIsOpen(pre => !pre)}>
              AGREE
            </Button>
          </DialogActions>
        </Card>
      </Dialog>
    </>
  );
};
