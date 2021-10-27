import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import { OutsideClicker } from '@chips/core/src/helpers/OutsideClicker';

import { ParentsBaseT } from '../../interface/common';
import { HTMLFieldSetElementT } from '../../interface/globalHtml';
import './select.scss';

export type SelectOptionT = {
  value: string | number;
  children: React.ReactNode;
};

export interface SelectPropsI extends ParentsBaseT, HTMLFieldSetElementT {
  /** The default value. Use when the component is not controlled. */
  defaultValue?: number | string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /** The label content. */
  label?: string;
  /** The variant to use. */
  variant?:
    | 'text'
    | 'outlined'
    | 'contained'
    | 'underlined'
    | 'capsuleOutlined'
    | 'capsuleContained';
  /** Callback fired when the value is changed. */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => void;
}

/**
 * Select
 * Select components are used for collecting user provided information from a list of options.
 * @param defaultValue The default value. Use when the component is not controlled.
 * @param disabled If `true`, the component is disabled.
 * @param label The label content.
 * @param variant The variant to use.
 * @param children The content of the component.
 * @param className For Vue and Angular users, use 'className' instead of 'class' when adding a class to chips components.
 * @param style CSS styles.
 * @function onChange Callback fired when the value is changed.
 */
export const Select = (props: SelectPropsI): JSX.Element => {
  const {
    defaultValue,
    disabled,
    label,
    variant = 'outlined',
    onChange,
    children: childrenProp,
    className,
    style,
    ...rest
  } = props;

  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectOption, setSelectOption] = useState<
    SelectOptionT | Record<string, never>
  >({});

  useEffect(() => {
    if (!selectOption.value) {
      setShrink(false);
    } else {
      setShrink(true);
    }
    setOpen(false);
  }, [selectOption]);

  const onSelectClick = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      selectValue: defaultValue || selectOption.value,
      onChange,
      setSelectOption
    });
  });

  return (
    <div
      className={classNames(
        'chips-select',
        `chips-select--${variant}`,
        {
          'chips-select--disabled': disabled
        },
        className
      )}
      style={style}
      onClick={() => onSelectClick()}
    >
      {label && (
        <label
          className={classNames(
            'chips-select__label',
            `chips-select__label--${variant}`,
            { 'chips-select__label--shrink': shrink },
            { [`chips-select__label--shrink--${variant}`]: shrink }
          )}
        >
          {label}
        </label>
      )}
      <div
        className={classNames(
          'chips-select__content',
          `chips-select__content--${variant}`
        )}
      >
        {selectOption.value && selectOption.children}
      </div>
      <MdKeyboardArrowDown
        className={classNames(
          'chips-select__arrow-icon',
          `chips-select__arrow-icon--${variant}`
        )}
      />
      <input
        name={label}
        className="chips-select__input"
        onFocus={() => !disabled && setShrink(true)}
      />
      <fieldset
        className={classNames(
          'chips-select__fieldset',
          `chips-select__fieldset--${variant}`,
          {
            'chips-select__fieldset--shrink': shrink
          }
        )}
        {...rest}
      >
        {label && (
          <legend
            className={classNames('chips-select__legend', {
              'chips-select__legend--shrink': shrink
            })}
          >
            <span className="chips-select__span">{label}</span>
          </legend>
        )}
      </fieldset>

      <OutsideClicker
        action={() => {
          if (!selectOption.value) {
            setShrink(false);
          }
          setOpen(false);
        }}
        open={open}
      >
        <div
          className={classNames('chips-options__container', {
            'chips-options__container--open': open
          })}
        >
          {children}
        </div>
      </OutsideClicker>
    </div>
  );
};
