import React from 'react';
import { Avatar, Badge, Button } from '@chips/core';
import { AiOutlineBell } from 'react-icons/ai';
import './badgeDemo.scss';

const BadgeDemo = (): JSX.Element => {
  return (
    <div>
      <h2>Badge</h2>
      <div className="d-flex demo-section-container">
        <Badge
          className="badge-wrapper"
          badgeContent={3}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          color="red"
        >
          <Avatar alt="Giant" variant="circle">
            X
          </Avatar>
        </Badge>

        <Badge
          className="badge-wrapper"
          badgeContent={3}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <Button variant="text">Button</Button>
        </Badge>

        <Badge
          className="badge-wrapper"
          badgeContent={9}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <AiOutlineBell fontSize="30px" />
        </Badge>
      </div>
    </div>
  );
};

export default BadgeDemo;
