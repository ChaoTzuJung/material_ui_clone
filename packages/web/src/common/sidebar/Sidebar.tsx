import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import { Collapse, List, ListItem, ListItemText } from '@chips/core';

import routes from '@chips/web/routes';
import ChipsImg from '@chips/web/assets/images/chips_logo.png';
import './sidebar.scss';

const Sidebar = (): JSX.Element => {
  const { pathname } = useLocation();
  const [collapse, setCollapse] = useState<{ name: string; open: boolean }[]>(
    []
  );

  useEffect(() => {
    const _collapse = cloneDeep(collapse);
    routes.forEach(item => {
      if (item.routes) {
        if (pathname.includes(item.path)) {
          _collapse.push({ name: item.name, open: true });
        } else {
          _collapse.push({ name: item.name, open: false });
        }
      }
      return item.routes?.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    });
    setCollapse(_collapse);
  }, [routes]);

  const onCollapseClick = (outerName: string) => {
    const _collapse = cloneDeep(collapse);
    _collapse.forEach(item => {
      if (item.name === outerName) {
        item.open = !item.open;
      }
    });
    setCollapse(_collapse);
  };

  return (
    <>
      <Link to="/guideline/">
        <div className="chips-logo d-flex">
          <div className="chips-logo__img">
            <img src={ChipsImg} alt="chips" />
          </div>
          <h1>Chips</h1>
        </div>
      </Link>
      <List>
        {routes.map(({ name: outerName, routes }) => {
          return (
            <div key={outerName}>
              {outerName !== 'Home' && (
                <>
                  <ListItem
                    className="sidebar__list-item"
                    onClick={() => onCollapseClick(outerName)}
                  >
                    <ListItemText>{outerName}</ListItemText>
                  </ListItem>
                  <Collapse
                    isOpen={
                      collapse.length !== 0
                        ? collapse.filter(item => item.name === outerName)[0]
                          .open
                        : false
                    }
                    timeout={500}
                  >
                    {routes?.map(({ name, path }) => (
                      <ListItem
                        key={name}
                        href={path}
                        className={
                          'sidebar__list-subItem' +
                          `${
                            pathname === path
                              ? ' sidebar__list-item--active'
                              : ''
                          }`
                        }
                      >
                        <ListItemText>{name}</ListItemText>
                      </ListItem>
                    ))}
                  </Collapse>
                </>
              )}
            </div>
          );
        })}
      </List>
    </>
  );
};

export default Sidebar;
