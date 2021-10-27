import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@chips/core';
import { MdNavigateNext } from 'react-icons/md';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';

const BreadcrumbsDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Basic Breadcrumbs</h2>
      <div className="d-flex demo-section-container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/User">User</Link>
          <span>Alan</span>
        </Breadcrumbs>
      </div>
      <hr />
      <h2>Breadcrumbs with icons</h2>
      <div className="d-flex demo-section-container">
        <Breadcrumbs>
          <Link to="/">
            <AiFillHome style={{ marginRight: 4 }} />
            Home
          </Link>
          <Link to="/User">
            <AiOutlineUser style={{ marginRight: 4 }} />
            User
          </Link>
          <span>Alan</span>
        </Breadcrumbs>
      </div>
      <hr />
      <h2>Breadcrumbs with custom separator</h2>
      <div className="demo-section-container">
        <div style={{ margin: 8 }}>
          <Breadcrumbs separator={<MdNavigateNext />}>
            <Link to="/">Home</Link>
            <Link to="/User">User</Link>
            <span>Alan</span>
          </Breadcrumbs>
        </div>
        <div style={{ margin: 8 }}>
          <Breadcrumbs separator="/">
            <Link to="/">Home</Link>
            <Link to="/User">User</Link>
            <span>Alan</span>
          </Breadcrumbs>
        </div>
        <div style={{ margin: 8 }}>
          <Breadcrumbs separator="-">
            <Link to="/">Home</Link>
            <Link to="/User">User</Link>
            <span>Alan</span>
          </Breadcrumbs>
        </div>
      </div>
      <hr />
      <h2>Collapsed Breadcrumbs</h2>
      <div className="demo-section-container">
        <Breadcrumbs separator="/" maxItems={3}>
          <span>元件庫</span>
          <Link to="/guideline/cell/avatar">Avatar</Link>
          <Link to="/guideline/cell/badge">Badge</Link>
          <Link to="/guideline/cell/breadcrumbs">BreadCrumbs</Link>
          <Link to="/guideline/cell/button">Button</Link>
          <Link to="/guideline/cell/card">Card</Link>
          <Link to="/guideline/cell/checkbox">Checkbox</Link>
          <Link to="/guideline/cell/collapse">Collapse</Link>
          <Link to="/guideline/cell/dialog">Dialog</Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreadcrumbsDemo;
