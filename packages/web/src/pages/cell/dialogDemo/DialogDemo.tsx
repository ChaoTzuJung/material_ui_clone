import React, { useState } from 'react';
import {
  Button,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@chips/core';
import { MdClose } from 'react-icons/md';

import './dialogDemo.scss';

const DialogDemo = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShadeOpen, setShadeIsOpen] = useState(false);

  return (
    <div className="dialog-demo">
      <h2>Dialog</h2>
      <div className="demo-section-container">
        <Button onClick={() => setIsOpen(pre => !pre)} variant="contained">
          open dialog
        </Button>
        <Dialog
          open={isOpen}
          hideShade={true}
          onShadeClick={() => setShadeIsOpen(false)}
        >
          <Card className="dialog-demo__container">
            <DialogTitle>
              <div className="dialog-demo__header">
                <div className="dialog-demo__title">This is dialog title</div>
                <MdClose
                  className="dialog-demo__close"
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
      </div>
      <hr />
      <h2>Dialog with Shade</h2>
      <div className="demo-section-container">
        <Button onClick={() => setShadeIsOpen(pre => !pre)} variant="contained">
          open shade dialog
        </Button>
        <Dialog open={isShadeOpen} onShadeClick={() => setShadeIsOpen(false)}>
          <Card className="dialog-demo__container">
            <DialogTitle>
              <div className="dialog-demo__header">
                <div className="dialog-demo__title">This is dialog title</div>
                <MdClose
                  className="dialog-demo__close"
                  onClick={() => setShadeIsOpen(false)}
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
              <Button
                variant="text"
                onClick={() => setShadeIsOpen(pre => !pre)}
              >
                DISAGREE
              </Button>
              <Button
                variant="text"
                onClick={() => setShadeIsOpen(pre => !pre)}
              >
                AGREE
              </Button>
            </DialogActions>
          </Card>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogDemo;
