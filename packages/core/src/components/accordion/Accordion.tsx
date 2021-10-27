import React, { useState, Children } from 'react';
import classNames from 'classnames';
import { ParentsBaseT } from '../../interface/common';
import './accordion.scss';

export interface AccordionPropsI extends ParentsBaseT {
  /** If true, expands the accordion by default. */
  defaultExpanded?: boolean;
  /** If true, expands the accordion, otherwise collapse it. */
  expanded?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** Callback fired when the expand/collapse state is changed. */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    expanded: boolean
  ) => void;
}

/**
 * Accordion
 * Accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
 * @param defaultExpanded If true, expands the accordion by default.
 * @param expanded If true, expands the accordion, otherwise collapse it.
 * @param disabled If true, the component is disabled.
 * @function onChange Callback fired when the expand/collapse state is changed.
 */
export const Accordion = ({
  children: childrenProp,
  className,
  style,
  defaultExpanded = false,
  expanded = false,
  disabled,
  onChange
}: AccordionPropsI): JSX.Element => {
  const [defaultIsExpanded, setDefaultIsExpanded] =
    useState<boolean>(defaultExpanded);

  const composeClass = () => {
    const disableClass = 'chips-accordion__disabled';

    return classNames(
      'chips-accordion',
      { [disableClass]: disabled },
      className
    );
  };

  const children = Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      expanded,
      defaultIsExpanded,
      setDefaultIsExpanded,
      onChange
    });
  });

  return (
    <div className={composeClass()} style={style}>
      {children}
    </div>
  );
};
