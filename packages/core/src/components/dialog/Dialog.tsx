import React from 'react';
import classNames from 'classnames';
import { Shade } from '@chips/core/components/shade/Shade';
import { OutsideClicker } from '@chips/core/src/helpers/OutsideClicker';

import { ParentsBaseT } from '../../interface/common';

import './dialog.scss';

export interface DialogPropsI extends ParentsBaseT {
  /** If `true`, the component is open. */
  open: boolean;
  /** Hide the shade of the dialog. */
  hideShade?: boolean;
  /**
   * Callback fired when the component is clicked.
   * @param {object} event The event source of the callback.
   */
  onShadeClick?: (...args: any[]) => void;
}

/**
 * Dialog
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * @param style Override or extend the styles applied to the component.
 * @param children The content of the component.
 * @param className Class that overrides or extends the styles applied to the component.
 * @param open If `true`, the dialog is opened.
 * @param hideShade Hide the shade of the dialog
 * @function onShadeClick Callback fired when the component is clicked.
 */
export const Dialog = ({
  style,
  children,
  className,
  open = false,
  hideShade = false,
  onShadeClick
}: DialogPropsI): JSX.Element => {
  const dialog = (
    <div
      className={classNames('chips-dialog', className, {
        'chips-dialog--show': open
      })}
      style={style}
    >
      {children}
    </div>
  );

  if (hideShade) {
    return (
      <OutsideClicker open={open} action={onShadeClick}>
        {dialog}
      </OutsideClicker>
    );
  }
  return (
    <Shade open={open} onClick={onShadeClick}>
      {dialog}
    </Shade>
  );
};
