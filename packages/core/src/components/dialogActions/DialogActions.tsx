import React from 'react';
import { ParentsBaseT } from '../../interface/common';

import './dialogActions.scss';

export interface DialogActionsPropsI extends ParentsBaseT {
  /** The position of the action button. */
  position?: 'end' | 'center' | 'start' | 'between' | 'around' | 'evenly';
}

/**
 * DialogActions
 * DialogActions allow users put it on bottom section and customize your dialog
 * @param className Class that overrides or extends the styles applied to the component.
 * @param children The content of the component.
 * @param style Style that overrides or extends the styles applied to the component.
 * @param position The position of the action buttons
 */
export const DialogActions = ({
  className,
  children,
  style,
  position
}: DialogActionsPropsI): JSX.Element => {
  return (
    <div
      className={
        'chips-dialogActions' +
        (className ? ` ${className}` : '') +
        (position ? ` chips-dialogActions--${position}` : '')
      }
      style={style}
    >
      {children}
    </div>
  );
};
