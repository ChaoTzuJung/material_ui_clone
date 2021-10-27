import React, { useRef, MutableRefObject } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { ParentsBaseT } from '../../interface/common';
import './accordionDetail.scss';

export interface AccordionDetailPropsI extends ParentsBaseT {
  /** Use the expanded prop in AccordionDetail to determine its status */
  expanded?: boolean;
  /** If true, expands the accordion by default. */
  defaultIsExpanded?: boolean;
}

/**
 * AccordionDetail
 * AccordionDetail is a part of Accordion component
 * @param expanded Use the expanded prop in AccordionDetail to determine its status
 * @param defaultIsExpanded If true, expands the accordion by default.
 */
export const AccordionDetail = ({
  children,
  className,
  style,
  expanded = false,
  defaultIsExpanded
}: AccordionDetailPropsI): JSX.Element => {
  const nodeRef: MutableRefObject<HTMLDivElement> =
    useRef() as MutableRefObject<HTMLDivElement>;

  const expandedStatus = expanded || defaultIsExpanded;

  const composeClass = () => {
    const expandClass = 'chips-accordionDetail__expand';

    return classNames(
      'chips-accordionDetail',
      { [expandClass]: expandedStatus },
      className
    );
  };

  return (
    <CSSTransition
      in={expandedStatus}
      timeout={300}
      classNames="chips-accordionDetail"
      nodeRef={nodeRef}
    >
      <div className={composeClass()} style={style} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};
