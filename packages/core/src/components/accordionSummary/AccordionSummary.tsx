import React, { useRef, ReactNode, MutableRefObject } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { ParentsBaseT } from '../../interface/common';
import './accordionSummary.scss';

export interface AccordionSummaryPropsI extends ParentsBaseT {
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** The icon to display as the expand indicator */
  expandIcon?: ReactNode;
  /** If true, expands the accordion by default. */
  defaultIsExpanded?: boolean;
  /** Use the expanded prop in AccordionSummary to determine its expandIcon status */
  expanded?: boolean;
  /** Callback fired when the AccordionSummary is clicked. */
  setDefaultIsExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  /** Callback fired when the expand/collapse state is changed. */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    expanded: boolean
  ) => void;
}

/**
 * AccordionSummary
 * AccordionSummary is a part of Accordion component
 * @param disabled If true, the component is disabled.
 * @param expandIcon The icon to display as the expand indicator
 * @param defaultIsExpanded If true, expands the accordion by default.
 * @param expanded Use the expanded prop in AccordionDetail to determine its status
 * @function setDefaultIsExpanded Callback fired when the AccordionSummary is clicked.
 * @function onChange Callback fired when the expand/collapse state is changed.
 */
export const AccordionSummary = ({
  children,
  className,
  style,
  disabled = false,
  expandIcon,
  defaultIsExpanded,
  expanded = false,
  setDefaultIsExpanded,
  onChange
}: AccordionSummaryPropsI): JSX.Element => {
  const nodeRef: MutableRefObject<HTMLDivElement> =
    useRef() as MutableRefObject<HTMLDivElement>;

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange && onChange?.(event, !expanded as boolean);
    !onChange &&
      setDefaultIsExpanded &&
      setDefaultIsExpanded(!defaultIsExpanded as boolean);
  };

  const composeClass = () => {
    const disableClass = 'chips-accordionSummary__disable';

    return classNames(
      'chips-accordionSummary',
      { [disableClass]: disabled },
      className
    );
  };

  const expandedStatus = expanded || (defaultIsExpanded as boolean);

  return (
    <CSSTransition
      in={expandedStatus}
      timeout={300}
      classNames="chips-accordionSummary"
      nodeRef={nodeRef}
    >
      <div
        className={composeClass()}
        style={style}
        onClick={handleClick}
        ref={nodeRef}
      >
        <div className="chips-accordionSummary__content">{children}</div>
        <div
          className={classNames('chips-accordionSummary__icon', {
            'chips-accordionSummary__direction': expandedStatus
          })}
        >
          {expandIcon}
        </div>
      </div>
    </CSSTransition>
  );
};
