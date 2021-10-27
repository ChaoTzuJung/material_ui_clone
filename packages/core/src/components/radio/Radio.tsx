import React from 'react';
import { ParentsBaseT, ColorBaseT } from '../../interface/common';

import './radio.scss';

export interface RadioPropsI extends ParentsBaseT, ColorBaseT {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
}

export const Radio = ({
  name,
  value,
  children,
  onChange,
  disabled,
  checked,
  color,
  className,
  style
}: RadioPropsI): JSX.Element => {
  return (
    <div
      className={
        'chips-radio' +
        `${color ? ' chips-radio--' + color : ''}` +
        `${disabled ? ' chips-radio--disabled' : ''}` +
        `${className ? ' ' + className : ''}`
      }
      style={style}
    >
      <input
        className="chips-radio__input"
        type="radio"
        id={value}
        value={value}
        name={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange?.(event)
        }
        checked={checked}
        disabled={disabled}
      />
      <div className="chips-radio--check"></div>
      {children && (
        <label className="chips-label" htmlFor={value}>
          {children}
        </label>
      )}
    </div>
  );
};
