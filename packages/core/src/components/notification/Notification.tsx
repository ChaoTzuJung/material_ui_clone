import React from 'react';
import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import { OutsideClicker } from '@chips/core/src/helpers/OutsideClicker';
import { ColorBaseT } from '../../interface/common';
import './notification.scss';

interface PositionI {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface NotificationPropsI extends ColorBaseT {
  /** If `true`, the notification is opened. */
  open: boolean;
  /** The message in the notification. */
  message: string;
  /**
   * The anchor of the notification.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  position?: PositionI;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration?: number;
  /** If `true`, the notification will close on click away. */
  closeOnClickOutside?: boolean;
}

const composeClass = (position: PositionI, color: ColorBaseT) => {
  const { vertical, horizontal } = position;
  return classNames(
    'chips-notification',
    `chips-notification--${vertical}${horizontal}`,
    `chips-notification--${color}`
  );
};

/**
 * Notification
 * Provides brief notifications.
 * @param open If `true`, the notification is opened.
 * @param message The message in the notification.
 * @param position The anchor of the notification.
 * @function onClose Callback fired when the component requests to be closed.
 * @param autoHideDuration The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the Snackbar. This behavior is disabled by default with the null value.
 * @param closeOnClickOutside If `true`, the notification will close on click away.
 */
export const Notification = ({
  open = false,
  message,
  position = { vertical: 'top', horizontal: 'right' },
  onClose,
  autoHideDuration,
  color = 'default',
  closeOnClickOutside = false
}: NotificationPropsI): JSX.Element => {
  // fix Warning: findDOMNode is deprecated in StrictMode.
  const nodeRef = React.useRef(null);

  useEffect(() => {
    if (autoHideDuration) {
      if (!open) return;

      const timer = setTimeout(() => {
        if (open) onClose();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const notificationDom = (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="chips-notification"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={composeClass(position, color as ColorBaseT)}
      >
        {message}
        <AiOutlineCloseCircle
          onClick={onClose}
          className="chips-notification__close-icon"
        />
      </div>
    </CSSTransition>
  );

  return (
    <>
      {closeOnClickOutside ? (
        <OutsideClicker action={onClose} open={open}>
          {notificationDom}
        </OutsideClicker>
      ) : (
        <>{notificationDom}</>
      )}
    </>
  );
};
