import React, { MouseEventHandler } from 'react';

import { ParentsBaseT } from '../../interface/common';
import './card.scss';

export interface CardPropsI extends ParentsBaseT {
  /**
   * The variant to use.
   * @default 'elevated'
   */
  variant?: 'elevated' | 'square' | 'round';
  /** Callback fired when the button is clicked. */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * Card
 * Just a card.
 * @param variant The variant to use.
 * @function onClick Callback fired when the button is clicked.
 */
export const Card = ({
  style,
  children,
  className,
  variant = 'elevated',
  onClick
}: CardPropsI): JSX.Element => {
  return (
    <div
      className={(className ? `${className}` : '') + ` chips-card--${variant}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
