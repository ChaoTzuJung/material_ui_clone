import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SelectOptionT } from '../select/Select';
import { ParentsBaseT } from '../../interface/common';

export interface OptionPropsI extends ParentsBaseT {
  value?: string | number;
  selectValue?: string | number;
  setSelectOption?: ({ value, children }: SelectOptionT) => void;
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => void;
}

export const Option = (props: OptionPropsI): JSX.Element => {
  const {
    value,
    selectValue,
    setSelectOption,
    onChange,
    children,
    className,
    style
  } = props;

  useEffect(() => {
    if (selectValue === value) {
      setSelectOption?.({ value, children } as SelectOptionT);
    }
  }, [value]);

  return (
    <div
      className={classNames('chips-option', className)}
      style={style}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSelectOption?.({ value, children } as SelectOptionT);
        if (selectValue !== value) {
          onChange && onChange?.(event, value as string | number);
        }
      }}
    >
      {children}
    </div>
  );
};
