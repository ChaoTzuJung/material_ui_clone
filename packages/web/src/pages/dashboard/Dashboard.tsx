import React, { useState } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Drawer } from '@chips/core';

import routes from '@chips/web/routes';
import Sidebar from '@chips/web/common/sidebar/Sidebar';
import Header from '@chips/web/common/header/Header';
import './dashboard.scss';

const Dashboard = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-wrapper d-flex">
      <Drawer
        open={sidebarOpen}
        onShadeClick={() => setSidebarOpen(false)}
        anchor="left"
        hideShade
      >
        <nav className="sidebar">
          <Sidebar />
        </nav>
      </Drawer>
      <main className="main">
        <header>
          <Header setSidebarOpen={() => setSidebarOpen(true)} />
        </header>
        <section className="content-container">
          {renderRoutes(routes as RouteConfig[])}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
