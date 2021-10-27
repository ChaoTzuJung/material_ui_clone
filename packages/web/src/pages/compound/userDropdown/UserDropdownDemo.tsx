import React from 'react';
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemText,
  Switch
} from '@chips/core';

import './userDropdownDemo.scss';

interface UserInfoPropsI {
  role?: string;
  profileImgUrl?: string;
  name: string;
  abbrName: string;
}

const UserInfo = (props: UserInfoPropsI) => {
  const { role, profileImgUrl, name, abbrName } = props;
  return (
    <div className="userInfo">
      <div>
        <Avatar src={profileImgUrl}>{abbrName}</Avatar>
      </div>
      <div className="userInfo-description">
        <div className="userInfo-description__name">{name}</div>
        {role && (
          <>
            <div className="userInfo-description__role-hint">
              Your Role in{' '}
              <span className="userInfo-description__role-hint-site">
                ASUS Site
              </span>{' '}
              is
            </div>
            <div className="userInfo-description__role-name">{role}</div>
          </>
        )}
      </div>
    </div>
  );
};

interface UserMenuPropsI {
  dark?: boolean;
  onDarkModeChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLogout?: () => void;
}

const UserMenu = (props: UserMenuPropsI) => {
  const { dark, onDarkModeChange, onLogout } = props;
  return (
    <div className="userMenu">
      <List className="userMenu__list">
        <ListItem>
          <ListItemText>System Role</ListItemText>
        </ListItem>
        <ListItem hideHover>
          <div className="userMenu-apperance">
            <div>
              <ListItemText>Appearance</ListItemText>
            </div>
            <div className="userMenu-apperance__switch">
              <Switch
                onChange={onDarkModeChange}
                checked={!dark}
                value="Light"
              />
            </div>
          </div>
        </ListItem>
        <ListItem onClick={onLogout}>
          <ListItemText>Log Out</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

interface UserDropdownProps extends UserInfoPropsI, UserMenuPropsI {
  className?: string;
  style?: React.CSSProperties;
  onMousedown?: (e: React.MouseEvent) => void;
}

const UserDropdown = (props: UserDropdownProps): JSX.Element => {
  const {
    role,
    dark = false,
    name,
    abbrName,
    className,
    style,
    onDarkModeChange,
    onLogout,
    onMousedown
  } = props;

  return (
    <div onMouseDown={onMousedown} className={className}>
      <Card className="userDropdown" style={style}>
        <div className="userDropdown__top">
          <UserInfo role={role} name={name} abbrName={abbrName} />
        </div>
        <hr className="divider" />
        <div className="userDropdown__down">
          <UserMenu
            dark={dark}
            onDarkModeChange={onDarkModeChange}
            onLogout={onLogout}
          />
        </div>
      </Card>
    </div>
  );
};

const UserDropdownDemo = () => {
  const role = 'Admin';
  const name = 'Jonny Chen';
  const abbrName = 'JC';

  return (
    <div className="userDropdownDemo">
      <UserDropdown name={name} abbrName={abbrName} />
      <UserDropdown role={role} name={name} abbrName={abbrName} />
    </div>
  );
};

export default UserDropdownDemo;
