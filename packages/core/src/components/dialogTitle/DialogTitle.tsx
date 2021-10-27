import React from 'react';
import { ParentsBaseT } from '../../interface/common';

import './dialogTitle.scss';

export type DialogTitlePropsI = ParentsBaseT

/**
 * DialogTitle
 * DialogTitle allow users put it on top section and customize your dialog
 * @param className Class that overrides or extends the styles applied to the component.
 * @param children The content of the component.
 * @param style Style that overrides or extends the styles applied to the component.
 */
export const DialogTitle = ({
  className,
  children,
  style
}: DialogTitlePropsI): JSX.Element => {
  return (
    <div
      className={'chips-dialogTitle' + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
    </div>
  );
};
