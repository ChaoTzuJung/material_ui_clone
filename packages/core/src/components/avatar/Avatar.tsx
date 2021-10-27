import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import classNames from 'classnames';
import { ParentsBaseT } from '../../interface/common';
import { useLoaded } from '@chips/core/customizedHooks/useLoaded';
import './avatar.scss';

export interface AvatarPropsI extends ParentsBaseT {
  /** Used in combination with src to provide an alt attribute for the rendered img element. */
  alt?: string;
  /** The src attribute for the img element. */
  src?: string;
  /** The shape of the avatar. */
  variant?: 'circle' | 'rounded' | 'square';
  /** Callback fired when the Avatar is clicked. */
  onClick?: (...args: any[]) => void;
}

/**
 * Avatar
 * Avatars are found throughout material design with uses in everything from tables to dialog menus.
 *
 * @param alt Used in combination with src to provide an alt attribute for the rendered img element.
 * @param src The src attribute for the img element.
 * @param children Used to render icon or text elements inside the Avatar if src is not set.
 * @param variant The shape of the avatar.
 * @function onClick Callback fired when the Avatar is clicked.
 */
export const Avatar = ({
  alt,
  src,
  children: childrenProp,
  variant = 'circle',
  onClick,
  className,
  style
}: AvatarPropsI): JSX.Element => {
  let children = null;

  const loaded = useLoaded(src as string);

  const hasImgNotFailing = src && loaded !== 'error';

  if (hasImgNotFailing) {
    children = <img alt={alt} src={src} className="chips-avatar__img" />;
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (src && alt) {
    children = alt[0];
  } else {
    children = <BsFillPersonFill />;
  }

  return (
    <span
      className={classNames(
        'chips-avatar',
        { 'chips-avatar--pointer': onClick },
        'chips-avatar__color--default',
        `chips-avatar--${variant}`,
        className
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
