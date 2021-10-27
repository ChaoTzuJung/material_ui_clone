import React from 'react';
import { ParentsBaseT } from '../../interface/common';
import './appBar.scss';

export interface AppBarI extends ParentsBaseT {
  /** The direction of the component. */
  direction?: 'horizontal' | 'vertical';
}

/**
 * AppBar
 *
 * @param direction The direction of the component.
 * @param children The content of the component.
 * @param className For Vue and Angular users, use 'className' instead of 'class' when adding a class to chips components.
 * @param style CSS styles.
 */
export const AppBar = ({
  direction = 'horizontal',
  children,
  className,
  style
}: AppBarI): JSX.Element => {
  return (
    <div
      className={
        'chips-appbar' +
        ` chips-appbar--${direction}` +
        (className ? ` ${className}` : '')
      }
      style={style}
    >
      {children}
    </div>
  );
};
