import React, { useState, useEffect } from 'react';
import { StyleBaseT, ColorBaseT } from '../../interface/common';

import './switch.scss';

export interface SwitchPropsI extends StyleBaseT, ColorBaseT {
  /** The value of the component. */
  value?: string;
  /** Callback fired when the state is changed. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** If true, the switch will be disabled. */
  disabled?: boolean;
  /** If true, the component is checked. */
  checked?: boolean;
  /** Determine label should be placed left side or right side. */
  labelPosition?: 'left' | 'right';
  /** The size of the component */
  size?: 'medium' | 'small';
}

/**
 * Switch
 * Switches toggle the state of a single setting on or off.
 *
 * @param value The value of the component.
 * @function onChange Callback fired when the state is changed.
 * @param disabled If true, the switch will be disabled.
 * @param checked If true, the component is checked.
 * @param color The color of the component.
 * @param labelPosition: Determine label should be placed left side or right side.
 * @param size: The size of the component.
 * @param className
 * @param style
 */
export const Switch = ({
  value,
  onChange,
  disabled,
  checked,
  labelPosition = 'left',
  size = 'small',
  color,
  className,
  style
}: SwitchPropsI): JSX.Element => {
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    setSwitchState(checked as boolean);
  }, [checked]);

  const handleSwitchClicked = () => {
    setSwitchState(!switchState);
  };

  const labelElement = (
    <span
      className={
        'chips-switch__label' + `${disabled ? ' chips-switch--disabled' : ''}`
      }
    >
      {value}
    </span>
  );

  return (
    <div
      className={
        'chips-switch__root' +
        `${size === 'medium' ? ' chips-switch__root--medium' : ''}` +
        (className ? ` ${className}` : '')
      }
      style={style}
      onClick={() => !disabled && handleSwitchClicked()}
    >
      {value && labelPosition === 'left' && labelElement}
      <span
        className={
          'chips-switch' +
          `${color ? ` chips-switch--${color}` : ''}` +
          `${disabled ? ' chips-switch--disabled' : ''}` +
          `${switchState ? ' chips-switch--active' : ''}`
        }
      >
        <span className="chips-switch__thumb"></span>
        <span className="chips-switch__track"></span>
      </span>
      {value && labelPosition === 'right' && labelElement}
      <input
        type="checkbox"
        name={value || ''}
        value={value || ''}
        checked={switchState || false}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          !disabled && onChange?.(event);
        }}
      />
    </div>
  );
};
