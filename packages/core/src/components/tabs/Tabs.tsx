import React, { useState, useEffect, createRef, RefObject } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { ParentsBaseT } from '../../interface/common';

import './tabs.scss';

export interface TabsPropsI extends ParentsBaseT {
  /** The value of the currently selected Tab. */
  value?: string | number;
  /** The color of the component. */
  color?: 'default' | 'primary';
  /** Allow for horizontally scrolling. */
  scrollable?: boolean;
  /** Determine behavior of scroll buttons when tabs are set to scroll. */
  scrollButtons?: boolean;
  /** Callback fired when the value changes. */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => void;
}
export interface IndicatorI {
  width: number;
  left: number;
}

/**
 * Tabs
 * Tabs make it easy to explore and switch between different views.
 *
 * @param value The value of the currently selected Tab.
 * @param children The content of the component.
 * @param color The color of the component.
 * @param scrollable Allow for horizontally scrolling.
 * @param scrollButtons Determine behavior of scroll buttons when tabs are set to scroll.
 * @function onChange Callback fired when the value changes.
 * @param className
 * @param style
 */
export const Tabs = ({
  value,
  children: childrenProp,
  color,
  scrollable,
  scrollButtons,
  onChange,
  className,
  style
}: TabsPropsI): JSX.Element => {
  const [selectTab, setSelectTab] = useState(0 as string | number);
  const [indicatorPos, setIndicatorPos] = useState({} as IndicatorI);
  const valueToIndex = new Map();
  const tabGroupRef: RefObject<HTMLDivElement> = createRef();

  const handleArrowBtnClicked = (direction: 'left' | 'right') => {
    const tabGroupScrollLeft = tabGroupRef.current?.scrollLeft as number;
    const tabGroupWidth = tabGroupRef.current?.offsetWidth as number;
    tabGroupRef.current?.scrollTo({
      left:
        direction === 'left'
          ? tabGroupScrollLeft - tabGroupWidth
          : tabGroupScrollLeft + tabGroupWidth,
      behavior: 'smooth'
    });
  };

  const handleIndicatorPos = (
    { width, left }: IndicatorI,
    value: string | number
  ) => {
    const tabGroupScrollLeft = tabGroupRef.current?.scrollLeft as number;
    const tabGroupWidth = tabGroupRef.current?.offsetWidth as number;

    // tab 被左邊遮住時，讓tab往右滑出
    if (tabGroupScrollLeft > left) {
      tabGroupRef.current?.scrollTo({ left: left, behavior: 'smooth' });
    }
    // tab 被右邊遮住時，讓tab往左滑出
    if (width + left > tabGroupScrollLeft + tabGroupWidth) {
      tabGroupRef.current?.scrollTo({
        left: width + left - tabGroupWidth,
        behavior: 'smooth'
      });
    }
    setIndicatorPos({ width, left });
    value !== undefined && setSelectTab(value);
  };

  useEffect(() => {
    let selected;
    if (value === undefined) {
      selected = 0;
    } else {
      selected = value;
    }
    value !== undefined && setSelectTab(selected);
  }, [value]);

  let childIndex = 0;
  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childIndex, childValue);

    childIndex += 1;
    return React.cloneElement(child, {
      selected: selectTab === 0 && childIndex === 0 ? childValue : selectTab,
      value: childValue,
      valueToIndex,
      onChange,
      handleIndicatorPos,
      ...(childIndex === 1 && !child.props.tabIndex ? { tabIndex: 0 } : {})
    });
  });

  return (
    <div
      className={
        'chips-tabs' +
        (scrollable ? ' chips-tabs--scrollable' : '') +
        (color ? ` chips-tabs--${color}` : '') +
        (className ? ` ${className}` : '')
      }
      style={style}
    >
      {scrollable && scrollButtons !== false && (
        <div
          className="chips-tab__scroll-btn chips-tab__scroll-btn--left"
          onClick={() => handleArrowBtnClicked('left')}
        >
          <MdKeyboardArrowLeft />
        </div>
      )}
      <div className="chips-tab-group" ref={tabGroupRef}>
        {children}
        <span
          className="chips-indicator"
          style={{ width: indicatorPos.width, left: indicatorPos.left }}
        ></span>
      </div>
      {scrollable && scrollButtons !== false && (
        <div
          className="chips-tab__scroll-btn chips-tab__scroll-btn--right"
          onClick={() => handleArrowBtnClicked('right')}
        >
          <MdKeyboardArrowRight />
        </div>
      )}
    </div>
  );
};
