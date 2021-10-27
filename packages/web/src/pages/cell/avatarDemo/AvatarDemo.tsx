import React from 'react';
import { Avatar, Badge } from '@chips/core';
import { BiRun } from 'react-icons/bi';

import hange from '@chips/web/assets/images/hange.png';
import levi from '@chips/web/assets/images/levi.jpeg';
import giant_tooth from '@chips/web/assets/images/giant_tooth.jpeg';
import giant from '@chips/web/assets/images/giant.jpeg';
import './avatarDemo.scss';

const AvatarDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Avatar with Image</h2>
      <div className="d-flex demo-section-container">
        <Avatar
          className="avatar-wrapper"
          alt="Hange"
          src={hange}
          variant="circle"
        />
        <Avatar
          className="avatar-wrapper"
          alt="Levi"
          src={levi}
          onClick={() => {
            console.log('獻出你的心臟吧！');
          }}
        />
        <Avatar
          className="avatar-wrapper"
          alt="Eren"
          src={giant_tooth}
          variant="rounded"
        />
        <Avatar
          className="avatar-wrapper"
          alt="Bertolt"
          src={giant}
          variant="square"
        />
      </div>
      <hr />
      <h2>Avatar with Letter and Icon</h2>
      <div className="d-flex demo-section-container">
        <Avatar className="avatar-wrapper">A</Avatar>
        <Avatar className="avatar-wrapper">SJ</Avatar>
        <Avatar className="avatar-wrapper">
          <BiRun />
        </Avatar>
      </div>
      <hr />
      <h2>Avatar with Broken Image</h2>
      <div className="d-flex demo-section-container">
        <Avatar
          className="avatar-wrapper"
          alt="Giant"
          src="broken-image.jpg"
          variant="circle"
        >
          X
        </Avatar>
        <Avatar
          className="avatar-wrapper"
          alt="Giant"
          src="broken-image.jpg"
          variant="circle"
        />
        <Avatar
          className="avatar-wrapper"
          src="broken-image.jpg"
          variant="circle"
        />
      </div>
      <hr />
      <h2>Avatar with Badge</h2>
      <div className="d-flex demo-section-container">
        <Badge className="avatar-wrapper" src={giant} badgeContent={2}>
          <Avatar alt="Giant" variant="circle">
            X
          </Avatar>
        </Badge>

        <Badge className="avatar-wrapper" src="broken-image.jpg">
          <Avatar alt="broken-image" variant="circle">
            X
          </Avatar>
        </Badge>

        <Badge
          className="avatar-wrapper"
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          badgeContent={1}
        >
          <Avatar alt="Giant" variant="circle">
            X
          </Avatar>
        </Badge>

        <Badge
          className="avatar-wrapper"
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          badgeContent={2}
        >
          <Avatar alt="Giant" variant="circle">
            X
          </Avatar>
        </Badge>

        <Badge
          className="avatar-wrapper"
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          badgeContent={3}
        >
          <Avatar alt="Giant" variant="circle">
            X
          </Avatar>
        </Badge>
      </div>
    </div>
  );
};

export default AvatarDemo;
