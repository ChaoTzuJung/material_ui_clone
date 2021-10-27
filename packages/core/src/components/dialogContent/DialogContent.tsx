import React from 'react';
import { ParentsBaseT } from '../../interface/common';

import './dialogContent.scss';

export type DialogContentPropsI = ParentsBaseT

/**
 * DialogContent
 * DialogContent allow users put it on middle section and customize your dialog
 * @param className Class that overrides or extends the styles applied to the component.
 * @param children The content of the component.
 * @param style Style that overrides or extends the styles applied to the component.
 */
export const DialogContent = ({
  className,
  children,
  style
}: DialogContentPropsI): JSX.Element => {
  return (
    <div
      className={'chips-dialogContent' + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
    </div>
  );
};
