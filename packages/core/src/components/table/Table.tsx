import React from 'react';
import { ParentsBaseT } from '../../interface/common';

import './table.scss';

export interface TableCellPropsI extends ParentsBaseT {
  onClick?: () => void;
}

export const TableCell = (props: TableCellPropsI): JSX.Element => {
  const { children, className, style, onClick } = props;

  return (
    <div
      className={'chips-table__row__cell' + (className ? ` ${className}` : '')}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const TableRow = (props: ParentsBaseT): JSX.Element => {
  const { children, className, style } = props;

  return (
    <div
      className={'chips-table__row' + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
    </div>
  );
};

export const TableHead = (props: ParentsBaseT): JSX.Element => {
  const { children, className, style } = props;

  return (
    <>
      <div
        className={'chips-table__head' + (className ? ` ${className}` : '')}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export const TableBody = (props: ParentsBaseT): JSX.Element => {
  const { children, className, style } = props;
  return (
    <div
      className={'chips-table__body' + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
    </div>
  );
};

const TableContext = React.createContext({});
export const Table = (props: ParentsBaseT): JSX.Element => {
  const { children, className, style } = props;

  return (
    <TableContext.Provider value={''}>
      <div
        className={'chips-table' + (className ? ` ${className}` : '')}
        style={style}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
};
