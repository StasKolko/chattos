import { cloneElement, isValidElement, ReactNode } from 'react';
import { useModal } from './ModalContext';

export const ModalTrigger = ({
  children
}: {
  children: ReactNode;
}) => {
  const { setOpen } = useModal();
  if (isValidElement(children)) {
    return cloneElement(children, { onClick: setOpen });
  }

  return null;
};