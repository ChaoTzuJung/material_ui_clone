import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import classNames from 'classnames';
import { ParentsBaseT, ColorBaseT } from '../../interface/common';
import { useLoaded } from '@chips/core/customizedHooks/useLoaded';

import './badge.scss';

export interface BadgePropsI extends ParentsBaseT, ColorBaseT {
  /** Used in combination with src to provide an alt attribute for the rendered img element. */
  alt?: string;
  /** The src attribute for the img element. */
  src?: string;
  /** The content rendered within the badge. */
  badgeContent?: React.ReactNode;
  /** The shape of the badge. */
  variant?: 'circle' | 'roundedEdge' | 'square';
  /** The anchor of the badge. */
  anchorOrigin?: { horizontal?: 'left' | 'right'; vertical?: 'bottom' | 'top' };
}

/**
 * Badge
 * Badge generates a small badge on its parent.
 *
 * @param alt Used in combination with src to provide an alt attribute for the rendered img element.
 * @param src The src attribute for the img element.
 * @param badgeContent The content rendered within the badge.
 * @param variant The shape of the badge.
 * @param anchorOrigin The anchor of the badge.
 * @param color The color of the component.
 * @param children Used to render icon or text elements inside the Badge if src is not set.
 * @param className
 * @param style
 */
export const Badge = ({
  alt,
  src,
  badgeContent: badgeContentProp,
  children,
  variant = 'circle',
  anchorOrigin = { horizontal: 'right', vertical: 'top' },
  color,
  className,
  style
}: BadgePropsI): JSX.Element => {
  let badgeContent = null;

  const loaded = useLoaded(src as string);

  const hasImgNotFailing = src && loaded !== 'error';

  if (hasImgNotFailing) {
    badgeContent = (
      <img alt={alt} src={src} className="chips-badge__contents__img" />
    );
  } else if (badgeContentProp != null) {
    badgeContent = badgeContentProp;
  } else if (src && alt) {
    badgeContent = alt[0];
  } else {
    badgeContent = <BsFillPersonFill />;
  }

  return (
    <div style={style} className={classNames('chips-badge', className)}>
      {children}
      <span
        className={classNames(
          'chips-badge__contents',
          `chips-badge--${variant}`,
          `chips-badge--${anchorOrigin.vertical}${anchorOrigin.horizontal}`
        )}
        style={{ backgroundColor: `${color}` }}
      >
        {badgeContent}
      </span>
    </div>
  );
};
