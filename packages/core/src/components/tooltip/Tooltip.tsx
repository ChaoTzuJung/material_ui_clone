import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import classNames from 'classnames';
import { OutsideClicker } from '@chips/core/src/helpers/OutsideClicker';
import { ParentsBaseT, ColorBaseT } from '../../interface/common';
import './tooltip.scss';

export interface SizeI {
  width: number;
  height: number;
}

export interface TooltipPropsI extends ParentsBaseT, ColorBaseT {
  /**
   * The variant to use.
   * @default 'elevated'
   */
  // TODO:
  // variant?: 'elevated' | 'square' | 'round';
  /**
   * Positioned tooltips
   * @default 'bottom'
   */
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end';
  /**
   * Arrow tooltips
   * @default true
   */
  arrow?: boolean;
  /** Callback fired when the button is clicked. */
  title: string | JSX.Element;
  /** You can define the types of events that cause a tooltip to show. */
  trigger?: 'hover' | 'click';
}

const setTooltipPosition = (
  placement: string,
  tooltipSize: SizeI,
  buttonSize: SizeI
): string => {
  if (placement === 'top') {
    return `0 0 0 ${-(tooltipSize.width - buttonSize.width) / 2}px`;
  }

  if (placement === 'right') {
    return `${-(tooltipSize.height - buttonSize.height) / 2}px 0 0 0`;
  }

  if (placement === 'bottom') {
    return `0 0 0 ${-(tooltipSize.width - buttonSize.width) / 2}px`;
  }

  if (placement === 'left') {
    return `${-(tooltipSize.height - buttonSize.height) / 2}px 0 0 0`;
  }

  return '0 0 0 0';
};

/**
 * Tooltip
 * Tooltips display informative text when users hover over, focus on, or tap an element.
 * @param color The color of the component. It supports those theme colors that make sense for this component.
 * @param placement The Tooltip has 12 placements choice. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.
 * @param arrow You can use the arrow prop to give your tooltip an arrow indicating which element it refers to.
 * @param title The title or text in tooltip
 * @param trigger You can define the types of events that cause a tooltip to show.
 * @function onClick Callback fired when the button is clicked.
 * */

export const Tooltip = ({
  style,
  children,
  className,
  // variant = 'elevated',
  color = 'default',
  placement = 'bottom',
  arrow,
  title,
  trigger = 'hover'
}: TooltipPropsI): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [tooltipSize, setTooltipSize] = useState<SizeI>({
    width: 0,
    height: 0
  });
  const [buttonSize, setButtonSize] = useState<SizeI>({ width: 0, height: 0 });
  const tooltipRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const buttonRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const composeTooltipContainer = () => {
    const visibleClass = 'chips-tooltip__container--visible';
    const directionClass = `chips-tooltip__container--${placement}`;

    return classNames(
      'chips-tooltip__container',
      { [visibleClass]: show },
      { [directionClass]: placement }
    );
  };

  const composeTooltipContent = () => {
    // const variantClass = `chips-tooltip__content--${variant}`;
    const colorClass = `chips-tooltip__content--${color}`;

    return classNames(
      'chips-tooltip__content',
      // { [variantClass]: variant },
      { [colorClass]: color }
    );
  };

  const composeArrowClass = () => {
    const colorClass = `chips-tooltip__arrow--${color}`;
    const directionClass = `chips-tooltip__arrow--${placement}`;

    return classNames(
      'chips-tooltip__arrow',
      { [colorClass]: color },
      { [directionClass]: placement }
    );
  };

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipSize({
        width: tooltipRef.current.offsetWidth,
        height: tooltipRef.current.offsetHeight
      });
    }

    if (buttonRef.current) {
      setButtonSize({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight
      });
    }
  }, [show]);

  if (trigger === 'click') {
    return (
      <OutsideClicker action={() => setShow(false)} open={show}>
        <div className={classNames('chips-tooltip', className)} style={style}>
          <div
            className="chips-tooltip__trigger"
            onClick={() => setShow(true)}
            ref={buttonRef}
          >
            {children}
          </div>
          <div className={composeTooltipContainer()}>
            <div
              className={composeTooltipContent()}
              ref={tooltipRef}
              style={{
                margin: setTooltipPosition(
                  placement,
                  tooltipSize,
                  buttonSize
                ) as string
              }}
            >
              {title}
              {arrow && <span className={composeArrowClass()} />}
            </div>
          </div>
        </div>
      </OutsideClicker>
    );
  }

  return (
    <div
      className={classNames('chips-tooltip', className)}
      style={style}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="chips-tooltip__trigger" ref={buttonRef}>
        {children}
      </div>
      <div
        className={composeTooltipContainer()}
        ref={tooltipRef}
        onMouseEnter={() => setShow(true)}
        style={{
          margin: setTooltipPosition(
            placement,
            tooltipSize,
            buttonSize
          ) as string
        }}
      >
        <div className={composeTooltipContent()}>
          {title}
          {arrow && <span className={composeArrowClass()} />}
        </div>
      </div>
    </div>
  );
};
