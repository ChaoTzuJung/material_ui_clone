import React, { ReactNode, useRef } from 'react';
import { useOutsideClicker } from '@chips/core/customizedHooks/useOutsideClicker';

interface Props {
  action?: () => void;
  children: ReactNode;
  open: boolean;
}

export const OutsideClicker = ({
  action,
  children,
  open
}: Props): JSX.Element => {
  const wrapperRef = useRef(null);
  useOutsideClicker(wrapperRef, open, action);

  return <div ref={wrapperRef}>{children}</div>;
};
