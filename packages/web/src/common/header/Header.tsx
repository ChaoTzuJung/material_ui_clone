import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { AppBar, Avatar, Badge } from '@chips/core';
import ChipsImg from '@chips/web/assets/images/chips_logo.png';
import { AiOutlineBell } from 'react-icons/ai';

import './header.scss';

interface HeaderPropsI {
  setSidebarOpen:
    | MouseEventHandler<HTMLDivElement>
    | Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setSidebarOpen }: HeaderPropsI): JSX.Element => {
  return (
    <AppBar className="header">
      <div className="header__left">
        <div className="header__logo-container d-flex">
          <div
            className="chips-logo d-flex header__logo"
            onClick={setSidebarOpen as MouseEventHandler<HTMLDivElement>}
          >
            <div className="chips-logo__img">
              <img src={ChipsImg} alt="chips" />
            </div>
            <h1>Chips</h1>
          </div>
        </div>
      </div>
      <div className="header__right d-flex">
        <div className="header__noti">
          <Badge
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            badgeContent={1}
          >
            <AiOutlineBell />
          </Badge>
        </div>
        <div className="header__user">
          <Avatar
            onClick={() => {
              console.log('獻出你的心臟吧！');
            }}
          >
            SJ
          </Avatar>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
