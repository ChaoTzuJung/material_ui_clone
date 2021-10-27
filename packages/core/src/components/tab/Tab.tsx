import React, { createRef, RefObject, useEffect } from 'react';
import { ParentsBaseT } from '../../interface/common';
import { IndicatorI } from '../tabs/Tabs';

export interface TabPropsI extends ParentsBaseT {
  /** You can provide your own value.  */
  value?: string | number;
  /** If true, the tab will be disabled.  */
  disabled?: boolean;
  /** The tab you selected.  */
  selected?: string | number;
  /** Callback fired when the value changes.  */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => void;
  /** @ignore */
  valueToIndex?: Map<string | number, string | number>;
  /** @ignore */
  handleIndicatorPos?: (
    { width, left }: IndicatorI,
    value?: string | number
  ) => void;
}

/**
 * Tabs
 * Tabs make it easy to explore and switch between different views.
 *
 * @param value You can provide your own value.
 * @param children The content of the component.
 * @param disabled If true, the tab will be disabled.
 * @param selected The tab you selected.
 * @function onChange Callback fired when the value changes.
 * @param className
 * @param style
 */
export const Tab = ({
  value,
  children,
  disabled,
  selected,
  valueToIndex,
  onChange,
  handleIndicatorPos,
  className,
  style
}: TabPropsI): JSX.Element => {
  const ref: RefObject<HTMLDivElement> = createRef();

  const handleTabsClicked = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => {
    onChange?.(event, value);
    handleIndicatorPos?.(
      {
        width: ref.current?.offsetWidth as number,
        left: ref.current?.offsetLeft as number
      },
      value
    );
  };

  useEffect(() => {
    if (renderSelected()) {
      handleIndicatorPos?.({
        width: ref.current?.offsetWidth as number,
        left: ref.current?.offsetLeft as number
      });
    }
  }, [selected]);

  const renderSelected = () => {
    if (selected === 0) {
      return (
        value === (valueToIndex as Map<string | number, string | number>).get(0)
      );
    } else {
      return value === selected;
    }
  };

  return (
    <div
      ref={ref}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        !disabled && handleTabsClicked(event, value as string | number)
      }
      tabIndex={value as number}
      className={
        'chips-tab' +
        (className ? ` ${className}` : '') +
        `${renderSelected() ? ' chips-tab--active' : ''}` +
        `${disabled ? ' chips-tab--disabled' : ''}`
      }
      style={style}
    >
      {children}
    </div>
  );
};
