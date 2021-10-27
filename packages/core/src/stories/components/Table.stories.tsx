import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@chips/core/components/table/Table';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    TableHead,
    TableBody,
    TableRow,
    TableCell
  }
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = args => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Level</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>16892</TableCell>
        <TableCell>VivoBook</TableCell>
        <TableCell>VivoBook</TableCell>
        <TableCell>A</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>16879</TableCell>
        <TableCell>ASUS Desktop</TableCell>
        <TableCell>ASUS Desktop</TableCell>
        <TableCell>B</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
