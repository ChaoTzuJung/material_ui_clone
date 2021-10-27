import React from 'react';
import classNames from 'classnames';

import { ParentsBaseT, ColorBaseT } from '../../interface/common';
import './progress.scss';

export interface ProgressPropsI extends ParentsBaseT, ColorBaseT {
  /** The thickness of the spinner contour. */
  thickness?: number;
  /** The width and height of the progress */
  size?: string | number;
}

/**
 * Progress
 * Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
 * @param children The content of the component.
 * @param className Class that overrides or extends the styles applied to the component.
 * @param style Override or extend the styles applied to the component.
 * @param thickness The thickness of the spinner contour.
 * @param size The width and height of the progress
 * @param color The color of the component. It supports those theme colors that make sense for this component.
 */
export const Progress = ({
  children,
  className,
  style,
  size = 24,
  color = 'default',
  thickness = 2
}: // TODO: custom percentage in progress
// value = 0
ProgressPropsI): JSX.Element => {
  return (
    <div
      className={classNames('chips-progress', className, {
        [`chips-progress--${color}`]: color
      })}
      style={{
        width: size,
        height: size,
        ...style
      }}
    >
      <svg
        className="chips-progress__circular"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle className="chips-progress__circle" cx="12" cy="12" r="10">
          {children}
        </circle>
      </svg>
    </div>
  );
};
