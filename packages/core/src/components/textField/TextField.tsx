import classNames from 'classnames';
import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import { StyleBaseT } from '../../interface/common';
import './textField.scss';

type VariantT = 'standard' | 'filled' | 'outlined';

export interface TextFieldPropsI extends StyleBaseT {
  /** The label content. */
  label: string;
  /** The value of the `input` element, required for a controlled component. */
  value: string;
  /** Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types). */
  type: 'text' | 'number' | 'password';
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /** Callback fired when the value is changed. */
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** The variant to use. */
  variant?: VariantT;
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** Icon decoration on the front. */
  startAdornment?: ReactNode;
  /** Icon decoration on the back. */
  endAdornment?: ReactNode;
  /** Enables multi-line input. */
  multiLine?: boolean;
  /** If true, component will extend to the full width of the parent. */
  fullWidth?: boolean;
  /** For Vue and Angular users, use 'className' instead of 'class' when adding a class to chips components. */
  className?: string;
  /** CSS styles. */
  style?: CSSProperties;
}

/**
 * Text fields let users enter and edit text.
 * @param label The label content.
 * @param value The value of the `input` element, required for a controlled component.
 * @param type Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
 * @param disabled If `true`, the component is disabled.
 * @function onChange Callback fired when the value is changed.
 * @param variant The variant to use.
 * @param error If `true`, the label is displayed in an error state.
 * @param helperText The helper text content.
 * @param startAdornment Icon decoration on the front.
 * @param endAdornment Icon decoration on the end.
 * @param multiLine Enables multi-line input.
 * @param fullWidth If true, component will extend to the full width of the parent.
 * @param className For Vue and Angular users, use 'className' instead of 'class' when adding a class to chips components.
 * @param style CSS styles.
 */
export const TextField = forwardRef(
  (
    {
      label,
      value,
      type,
      className,
      disabled,
      onChange,
      style,
      variant = 'standard',
      error,
      helperText,
      startAdornment,
      endAdornment,
      multiLine,
      fullWidth
    }: TextFieldPropsI,
    ref: any
  ): JSX.Element => {
    const inputClass = multiLine
      ? `chips-textField__textarea--${variant}` + (disabled ? '--disabled' : '')
      : `chips-textField__input--${variant}` + (disabled ? '--disabled' : '');

    const fieldStyle = {
      width: startAdornment || endAdornment ? 'calc(95% - 30px)' : '95%',
      height: `calc(${style?.height} - 15px)`,
      paddingLeft: startAdornment ? '35px' : ''
    };

    return (
      <div
        className={classNames(className)}
        style={{
          width: fullWidth ? '100%' : '300px',
          height: multiLine ? '65px' : '40px',
          ...style
        }}
      >
        <div
          className={`chips-textField--${variant}` + (error ? '--error' : '')}
        >
          {multiLine ? (
            <textarea
              className={inputClass}
              id={label}
              placeholder={label}
              value={value}
              onChange={onChange}
              disabled={disabled}
              ref={ref}
              style={fieldStyle}
            />
          ) : (
            <input
              className={inputClass}
              id={label}
              type={type}
              placeholder={label}
              value={value}
              onChange={onChange}
              disabled={disabled}
              ref={ref}
              style={fieldStyle}
            />
          )}
          {startAdornment && (
            <span className="chips-textField__adornment--start">
              {startAdornment}
            </span>
          )}
          {endAdornment && (
            <span className="chips-textField__adornment--end">
              {endAdornment}
            </span>
          )}
          <label
            htmlFor={label}
            className={
              'chips-textField__label' + (disabled ? '--disabled' : '')
            }
            style={startAdornment ? { paddingLeft: '30px' } : {}}
          >
            {label}
          </label>
        </div>
        {helperText && <p className="chips-textField__helper">{helperText}</p>}
      </div>
    );
  }
);
