import React from 'react';
import { Tabs, Tab } from '@chips/core';

const TabsDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Tabs</h2>
      <div className="d-flex">
        <Tabs color="primary">
          <Tab value="home">this is home</Tab>
          <Tab value="shop">
            New Arrivals in the Longest Text of Nonfiction that should appear in
            the next line
          </Tab>
          <Tab>blog</Tab>
          <Tab value="about">about</Tab>
          <Tab value="contact">contact</Tab>
          <Tab value="joanne">Joanne</Tab>
          <Tab value="jeff">Jeff</Tab>
          <Tab value="sam">Sam</Tab>
          <Tab value="singing" disabled>
            Singing
          </Tab>
        </Tabs>
      </div>
      <h2>Scrollable Tabs</h2>
      <div className="d-flex" style={{ maxWidth: '480px' }}>
        <Tabs scrollable>
          <Tab value="home">this is home</Tab>
          <Tab value="shop">
            New Arrivals in the Longest Text of Nonfiction that should appear in
            the next line
          </Tab>
          <Tab>blog</Tab>
          <Tab value="about">about</Tab>
          <Tab value="contact">contact</Tab>
          <Tab value="joanne">Joanne</Tab>
          <Tab value="jeff">Jeff</Tab>
          <Tab value="sam">Sam</Tab>
          <Tab value="singing" disabled>
            Singing
          </Tab>
        </Tabs>
      </div>
      <div className="d-flex" style={{ maxWidth: '480px' }}>
        <Tabs scrollable scrollButtons={false}>
          <Tab value="home">this is home</Tab>
          <Tab value="shop">
            New Arrivals in the Longest Text of Nonfiction that should appear in
            the next line
          </Tab>
          <Tab>blog</Tab>
          <Tab value="about">about</Tab>
          <Tab value="contact">contact</Tab>
          <Tab value="joanne">Joanne</Tab>
          <Tab value="jeff">Jeff</Tab>
          <Tab value="sam">Sam</Tab>
          <Tab value="singing" disabled>
            Singing
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsDemo;
