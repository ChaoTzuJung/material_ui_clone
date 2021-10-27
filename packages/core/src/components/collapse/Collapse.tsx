import React, { useRef, MutableRefObject } from 'react';
import { Transition } from 'react-transition-group';

import { ParentsBaseT, StyleBaseT } from '../../interface/common';
import './collapse.scss';

const ANIMATION_DURATION = 500;

export interface CollapsePropsI extends ParentsBaseT, StyleBaseT {
  /** If `true`, the component is open. */
  isOpen: boolean;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default 500
   */
  timeout?: number | { appear?: number; enter?: number; exit?: number };
}

/**
 * Collapse
 * Expand from the start edge of the child element.
 * @param isOpen
 * @param timeout
 */
export const Collapse = (props: CollapsePropsI): JSX.Element => {
  const { children, isOpen, timeout, style } = props;

  const nodeRef: MutableRefObject<HTMLDivElement> =
    useRef() as MutableRefObject<HTMLDivElement>;
  const animRef = useRef(NaN);

  const handleEnter = () => {
    nodeRef.current.style.height = '0px';
  };

  const handleEntering = () => {
    nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
  };

  const handleEntered = () => {
    nodeRef.current.style.height = 'auto';
  };

  const handleExit = () => {
    nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
  };

  const handleExiting = () => {
    animRef.current = requestAnimationFrame(() => {
      nodeRef.current.style.height = '0px';
    });
  };

  const handleExited = () => {
    if (!isNaN(animRef.current)) cancelAnimationFrame(animRef.current);
  };

  const defaultStyle = {
    transition: timeout ? `${timeout}ms` : `${ANIMATION_DURATION}ms`
  };

  return (
    <Transition
      in={isOpen}
      timeout={timeout ? timeout : ANIMATION_DURATION}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
      nodeRef={nodeRef}
    >
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...style
          }}
          className={`chips-collapse chips-collapse--${state}`}
          ref={nodeRef}
        >
          <div className="chips-collapse--inner">{children}</div>
        </div>
      )}
    </Transition>
  );
};
