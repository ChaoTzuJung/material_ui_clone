import React, { useState } from 'react';
import { cloneDeep } from 'lodash';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@chips/core';

interface HeadCol {
  field: keyof BodyCol;
  headerName: string;
  width: number;
  order: 'asc' | 'desc';
}

interface BodyCol {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

const columns: HeadCol[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    order: 'asc'
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    order: 'asc'
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    order: 'asc'
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
    order: 'asc'
  }
];

const rows: BodyCol[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 55 },
  { id: 6, lastName: 'Melisandre', firstName: 'Ali', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

const TableDemo = (): JSX.Element => {
  const [headCol, setHeadCol] = useState(columns as HeadCol[]);
  const [bodyCol, setBodyCol] = useState(rows as BodyCol[]);

  const sort = (item: HeadCol) => {
    const _headCol = cloneDeep(headCol);
    const _bodyCol = cloneDeep(bodyCol);

    _bodyCol.sort((a: BodyCol, b: BodyCol) => {
      if (item.order === 'asc') {
        _headCol.forEach(headitem => {
          if (headitem.field === item.field) headitem.order = 'desc';
        });
        return a[item.field] > b[item.field] ? 1 : -1;
      } else {
        _headCol.forEach(headitem => {
          if (headitem.field === item.field) headitem.order = 'asc';
        });
        return a[item.field] < b[item.field] ? 1 : -1;
      }
    });

    setHeadCol(_headCol);
    setBodyCol(_bodyCol);
  };

  return (
    <div>
      <h2>Table</h2>
      <Table>
        <TableHead>
          <TableRow>
            {headCol.map((col: HeadCol) => (
              <TableCell key={col.field} onClick={() => sort(col)}>
                {col.headerName}
              </TableCell>
            ))}
            <TableCell className="cursor-initial">Full Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyCol.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>
                {item.firstName} {item.lastName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableDemo;
