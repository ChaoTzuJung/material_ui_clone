import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ParentsBaseT } from '../../interface/common';

import './list.scss';

export interface ListItemPropsI extends ParentsBaseT {
  /** The URL to link to when the button is clicked. */
  href?: string;
  /** Hide the hover effect of the component. */
  hideHover?: boolean;
  /** Callback fired when a list is clicked. */
  onClick?: () => void;
}

export const List = ({
  children,
  className,
  style
}: ParentsBaseT): JSX.Element => {
  return (
    <div className={classNames('chips-list', className)} style={style}>
      {children}
    </div>
  );
};

/**
 * Lists
 * Lists are continuous, vertical indexes of text or images.
 * @param href The URL to link to when the button is clicked.
 * @param hideHover Hide the hover effect of the component.
 * @function onClick Callback fired when a list is clicked.
 */
export const ListItem = ({
  children,
  className,
  href,
  hideHover,
  onClick,
  style
}: ListItemPropsI): JSX.Element => {
  const listItemClasses = classNames(
    'chips-list__item',
    { 'chips-list__item--hover': !hideHover },
    className
  );

  return (
    <>
      {href ? (
        <Link to={href as string}>
          <div className={listItemClasses} style={style}>
            {children}
          </div>
        </Link>
      ) : (
        <div className={listItemClasses} onClick={onClick} style={style}>
          {children}
        </div>
      )}
    </>
  );
};

export const ListItemText = ({
  children,
  className,
  style
}: ParentsBaseT): JSX.Element => {
  return (
    <span
      className={classNames('chips-list__item--text', className)}
      style={style}
    >
      {children}
    </span>
  );
};
