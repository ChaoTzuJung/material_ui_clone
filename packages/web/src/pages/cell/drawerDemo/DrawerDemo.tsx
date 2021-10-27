import React, { useState } from 'react';
import { Button, Drawer } from '@chips/core';

import './drawerDemo.scss';

const DrawerDemo = (): JSX.Element => {
  const [drawerLeftOpen, setDrawerLeftOpen] = useState(false);
  const [drawerRightOpen, setDrawerRightOpen] = useState(false);
  const [drawerTopOpen, setDrawerTopOpen] = useState(false);
  const [drawerBottomOpen, setDrawerBottomOpen] = useState(false);

  const [fixedExtentLeftOpen, setFixedExtentLeftOpen] = useState(false);
  const [fixedExtentRightOpen, setFixedExtentRightOpen] = useState(false);
  const [fixedExtentTopOpen, setFixedExtentTopOpen] = useState(false);
  const [fixedExtentBottomOpen, setFixedExtentBottomOpen] = useState(false);

  const [shadeLeftOpen, setShadeLeftOpen] = useState(false);
  const [shadeRightOpen, setShadeRightOpen] = useState(false);
  const [shadeTopOpen, setShadeTopOpen] = useState(false);
  const [shadeBottomOpen, setShadeBottomOpen] = useState(false);

  const list = ['Home', 'Phone', 'Laptop', 'Tablet'];
  const longerList = [
    'Home',
    'Phone',
    'Laptop',
    'Tablet',
    'Lorem',
    'Ipsum',
    'Joanne',
    'Singing',
    'Jeff',
    'Sam',
    'Alan'
  ];

  const renderList = (list: string[]) => (
    <ul className="drawer-demo__ul">
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Drawer</h2>
      <div className="demo-section-container d-flex space-evenly">
        <Button onClick={() => setDrawerLeftOpen(!drawerLeftOpen)}>
          Toggle Left Drawer
        </Button>
        <Button onClick={() => setDrawerRightOpen(!drawerRightOpen)}>
          Toggle Right Drawer
        </Button>
        <Button onClick={() => setDrawerTopOpen(!drawerTopOpen)}>
          Toggle Top Drawer
        </Button>
        <Button onClick={() => setDrawerBottomOpen(!drawerBottomOpen)}>
          Toggle Bottom Drawer
        </Button>
        <Drawer open={drawerLeftOpen} anchor="left" hideShade>
          {renderList(list)}
        </Drawer>
        <Drawer open={drawerRightOpen} anchor="right" hideShade>
          {renderList(longerList)}
        </Drawer>
        <Drawer open={drawerTopOpen} anchor="top" hideShade>
          {renderList(list)}
        </Drawer>
        <Drawer open={drawerBottomOpen} anchor="bottom" hideShade>
          {renderList(longerList)}
        </Drawer>
      </div>
      <hr />
      <h2>Drawer with Fixed Extent</h2>
      <p>Click away to close drawer</p>
      <div className="demo-section-container d-flex space-evenly">
        <Button onClick={() => setFixedExtentLeftOpen(true)}>
          Open Left Drawer
        </Button>
        <Button onClick={() => setFixedExtentRightOpen(true)}>
          Open Right Drawer
        </Button>
        <Button onClick={() => setFixedExtentTopOpen(true)}>
          Open Top Drawer
        </Button>
        <Button onClick={() => setFixedExtentBottomOpen(true)}>
          Open Bottom Drawer
        </Button>
        <Drawer
          open={fixedExtentLeftOpen}
          onShadeClick={() => setFixedExtentLeftOpen(false)}
          anchor="left"
          extent={50}
          hideShade
        >
          {renderList(list)}
        </Drawer>
        <Drawer
          open={fixedExtentRightOpen}
          onShadeClick={() => setFixedExtentRightOpen(false)}
          anchor="right"
          extent={50}
          hideShade
        >
          {renderList(longerList)}
        </Drawer>
        <Drawer
          open={fixedExtentTopOpen}
          onShadeClick={() => setFixedExtentTopOpen(false)}
          anchor="top"
          extent={50}
          hideShade
        >
          {renderList(list)}
        </Drawer>
        <Drawer
          open={fixedExtentBottomOpen}
          onShadeClick={() => setFixedExtentBottomOpen(false)}
          anchor="bottom"
          extent={50}
          hideShade
        >
          {renderList(longerList)}
        </Drawer>
      </div>
      <br />
      <h2>Drawer with Shade</h2>
      <div className="demo-section-container d-flex space-evenly">
        <Button onClick={() => setShadeLeftOpen(true)}>Open Left Drawer</Button>
        <Button onClick={() => setShadeRightOpen(true)}>
          Open Right Drawer
        </Button>
        <Button onClick={() => setShadeTopOpen(true)}>Open Top Drawer</Button>
        <Button onClick={() => setShadeBottomOpen(true)}>
          Open Bottom Drawer
        </Button>
        <Drawer
          open={shadeLeftOpen}
          onShadeClick={() => setShadeLeftOpen(false)}
          anchor="left"
        >
          {renderList(list)}
        </Drawer>
        <Drawer
          open={shadeRightOpen}
          onShadeClick={() => setShadeRightOpen(false)}
          anchor="right"
        >
          {renderList(longerList)}
        </Drawer>
        <Drawer
          open={shadeTopOpen}
          onShadeClick={() => setShadeTopOpen(false)}
          anchor="top"
        >
          {renderList(list)}
        </Drawer>
        <Drawer
          open={shadeBottomOpen}
          onShadeClick={() => setShadeBottomOpen(false)}
          anchor="bottom"
        >
          {renderList(longerList)}
        </Drawer>
      </div>
    </div>
  );
};

export default DrawerDemo;
