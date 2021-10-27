import React, { ChangeEvent } from 'react';
import { ParentsBaseT, ColorBaseT } from '../../interface/common';

import './checkbox.scss';

export interface CheckboxPropsI extends ParentsBaseT, ColorBaseT {
  /** The name of the `input` element. */
  name?: string;
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: string;
  /**
   * Callback fired when the state is changed.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** If `true`, the component is checked. */
  checked?: boolean;
}

/**
 * Checkbox
 * Checkboxes allow the user to select one or more items from a set.
 * @param name The name of the `input` element.
 * @param value The value of the component. The DOM API casts this to a string.
 * @function onChange Callback fired when the state is changed.
 * @param disabled If `true`, the component is disabled.
 * @param checked If `true`, the component is checked.
 */
export const Checkbox = ({
  name,
  value,
  children,
  onChange,
  disabled,
  checked,
  color = 'default',
  className,
  style
}: CheckboxPropsI): JSX.Element => {
  const composedClass =
    'chips-checkbox' +
    `${disabled ? ' chips-checkbox--disabled' : ''}` +
    `${className ? ' ' + className : ''}`;

  return (
    <div style={style} className={composedClass}>
      <input
        type="checkbox"
        name={name}
        id={value}
        value={value}
        onChange={e => onChange?.(e)}
        checked={checked}
        disabled={disabled}
        className={`chips-checkbox__input--${color}`}
      />
      <div className="chips-checkbox__input-fake"></div>
      {children && (
        <label className="chips-checkbox__label" htmlFor={value}>
          {children}
        </label>
      )}
    </div>
  );
};
