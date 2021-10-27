import { ParentsBaseT, StyleBaseT } from '@chips/core/interface/common';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { Shade } from '@chips/core/components/shade/Shade';
import { OutsideClicker } from '@chips/core/src/helpers/OutsideClicker';

import './drawer.scss';

type AnchorT = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerPropsI extends ParentsBaseT, StyleBaseT {
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor?: AnchorT;
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open?: boolean;
  /** The extent of the drawer. */
  extent?: number;
  /** The shade of the drawer. */
  hideShade?: boolean;
  /**
   * Callback fired when the component is clicked.
   * @param {object} event The event source of the callback.
   */
  onShadeClick?: (...args: any[]) => void;
}

const handleDrawerMovement = (
  anchor: AnchorT,
  width: number,
  height: number,
  open: boolean,
  extent?: number
) => {
  switch (anchor) {
  case 'left':
    return extent
      ? {
        width: `${extent}%`,
        left: open ? `-${extent}%` : `-${extent * 2}%`,
        opacity: open ? 1 : 0
      }
      : {
        left: open ? `-${width}px` : `-${width * 2}px`,
        opacity: open ? 1 : 0
      };
  case 'right':
    return extent
      ? {
        width: `${extent}%`,
        right: open ? `${extent}%` : '0',
        opacity: open ? 1 : 0
      }
      : { right: open ? `${width}px` : '0', opacity: open ? 1 : 0 };
  case 'top':
    return extent
      ? {
        height: `${extent}%`,
        top: open ? `-${extent}%` : `-${extent * 2}%`,
        opacity: open ? 1 : 0
      }
      : {
        height: 'auto',
        top: open ? `-${height}px` : `-${height * 2}px`,
        opacity: open ? 1 : 0
      };
  case 'bottom':
    return extent
      ? {
        height: `${extent}%`,
        bottom: open ? `${extent}%` : '0',
        opacity: open ? 1 : 0
      }
      : {
        height: 'auto',
        bottom: open ? `${height}px` : '0',
        opacity: open ? 1 : 0
      };
  }
};

/**
 * Drawer
 * Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.
 * @param anchor Side from which the drawer will appear.
 * @param open If `true`, the component is shown.
 * @param extent The extent of the drawer.
 * @param hideShade Hide the shade of the drawer
 * @function onShadeClick Callback fired when the component is clicked.
 */
export const Drawer = ({
  className,
  style,
  anchor = 'left',
  open = false,
  children,
  extent,
  hideShade = false,
  onShadeClick
}: DrawerPropsI): JSX.Element => {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const _width = ref.current?.offsetWidth;
    const _height = ref.current?.offsetHeight;

    setContentWidth(_width as number);
    setContentHeight(_height as number);
  }, [open]);

  const drawer = (
    <div
      className={(className ? `${className}` : '') + ` chips-drawer--${anchor}`}
      style={{
        ...handleDrawerMovement(
          anchor,
          contentWidth,
          contentHeight,
          open,
          extent as number
        ),
        ...style
      }}
      ref={ref}
    >
      {children}
    </div>
  );

  if (hideShade) {
    return (
      <OutsideClicker open={open} action={onShadeClick}>
        {drawer}
      </OutsideClicker>
    );
  }

  return (
    <Shade open={open} onClick={onShadeClick}>
      {drawer}
    </Shade>
  );
};
