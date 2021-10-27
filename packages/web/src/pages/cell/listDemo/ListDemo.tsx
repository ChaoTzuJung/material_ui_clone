import React from 'react';
import { List, ListItem, ListItemText } from '@chips/core';

export interface Team {
  id: number;
  name: string;
  url?: string;
  message?: string;
}

export const TEAM = [
  {
    id: 1,
    name: 'Joanne',
    url: '#',
    message: 'time to go home'
  },
  {
    id: 2,
    name: 'Singing'
  },
  {
    id: 3,
    name: 'Sam'
  },
  {
    id: 4,
    name: 'Jeff'
  }
];

const ListDemo = (): JSX.Element => {
  return (
    <div>
      <h2>List</h2>
      <div className="demo-section-container">
        <List>
          {TEAM.map(({ id, name, url }: Team) => (
            <ListItem
              key={id}
              href={url}
              onClick={() => {
                console.log('onClick');
              }}
            >
              <ListItemText
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <hr />
      <h2>Hide hover List</h2>
      <div className="demo-section-container">
        <List>
          {TEAM.map(({ id, name, url }: Team) => (
            <ListItem key={id} href={url} hideHover>
              <ListItemText
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ListDemo;
