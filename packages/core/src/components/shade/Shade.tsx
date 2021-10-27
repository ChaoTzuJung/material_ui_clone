import React from 'react';
import classNames from 'classnames';

import { ParentsBaseT } from '../../interface/common';
import { OutsideClicker } from '../../helpers/OutsideClicker';
import './shade.scss';

export interface ShadePropsI extends ParentsBaseT {
  /** If `true`, the shade is opened. */
  open: boolean;
  /**
   * Callback fired when the component is clicked.
   * @param {object} event The event source of the callback.
   */
  onClick?: (...args: any[]) => void;
}

/**
 * Shade
 * The Shade component is used to provide emphasis on a particular element or parts of it.
 * @param open If `true`, the Shade is opened.
 * @function onClick Callback fired when the component is clicked.
 */
export const Shade = ({
  style,
  className,
  children,
  open = false,
  onClick
}: ShadePropsI): JSX.Element => {
  return (
    <div
      className={classNames(
        'chips-shade',
        { 'chips-shade--open': open },
        className
      )}
      style={style}
    >
      <OutsideClicker open={open} action={onClick}>
        {children}
      </OutsideClicker>
    </div>
  );
};
