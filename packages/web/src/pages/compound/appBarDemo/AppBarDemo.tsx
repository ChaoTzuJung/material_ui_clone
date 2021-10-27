import React from 'react';
import { AppBar, Avatar, Badge, Button } from '@chips/core';
import { SiAsus } from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  AiOutlineBell,
  AiFillAndroid,
  AiFillApple,
  AiFillRedditCircle
} from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

import './appBarDemo.scss';

const AppBarDemo = (): JSX.Element => {
  return (
    <div>
      <h2>App Bar</h2>
      <div className="demo-section-container">
        <AppBar className="appbar appbar-horizontal">
          <div className="appbar__left">
            <div className="asus-logo d-flex">
              <SiAsus className="asus-logo--icon" />
              <div className="asus-logo--title">
                <span>CMS|</span>
                <b>System Name</b>
              </div>
            </div>
          </div>
          <div className="appbar__right d-flex">
            <div className="d-flex appbar__app-groups">
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <AiFillApple />
              </Button>
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <AiFillAndroid />
              </Button>
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <AiFillRedditCircle />
              </Button>
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <MdKeyboardArrowDown />
              </Button>
            </div>
            <div className="appbar__noti">
              <Badge
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                badgeContent={1}
              >
                <Avatar
                  onClick={() => {
                    console.log('獻出你的心臟吧！');
                  }}
                >
                  <AiOutlineBell />
                </Avatar>
              </Badge>
            </div>
            <div className="appbar__user">
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
      </div>

      <h2>Vertical App Bar</h2>
      <div className="demo-section-container">
        <AppBar className="appbar appbar-vertical" direction="vertical">
          <div className="asus-logo">
            <SiAsus className="asus-logo--icon" />
          </div>
          <div className="appbar__top">
            <div className="appbar__user">
              <Avatar
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                SJ
              </Avatar>
            </div>
            <div className="appbar__noti">
              <Badge
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                badgeContent={1}
              >
                <Avatar
                  onClick={() => {
                    console.log('獻出你的心臟吧！');
                  }}
                >
                  <AiOutlineBell />
                </Avatar>
              </Badge>
            </div>
          </div>
          <div className="appbar__bottom">
            <div className="appbar__app-groups">
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <AiFillApple />
              </Button>
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <AiFillAndroid />
              </Button>
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <AiFillRedditCircle />
              </Button>
              <Button
                className="appbar-button-wrapper"
                variant="text"
                onClick={() => {
                  console.log('獻出你的心臟吧！');
                }}
              >
                <FiMoreHorizontal />
              </Button>
            </div>
          </div>
        </AppBar>
      </div>
    </div>
  );
};

export default AppBarDemo;
