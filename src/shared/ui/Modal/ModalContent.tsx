import { ReactNode, useCallback, useEffect } from 'react';
import { useModal } from './ModalContext';
import { cn } from '@/shared/lib/classNames';
import { createPortal } from 'react-dom';
import * as cls from './ModalContent.module.css';

export type ModalPosition = 'center' | 'right' | 'left';
export type ModalPadding = 'xs' | 'sm' | 'md' | 'lg';


export const ModalContent = ({
  children,
  overlay = false,
  alert = false,
  position = 'center',
  padding,
}: {
  children: ReactNode;
  overlay?: boolean;
  alert?: boolean;
  position?: ModalPosition;
  padding: ModalPadding;
}) => {
  const { open, close, setOpen } = useModal();

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen();
    }
  }, [setOpen]);

  useEffect(() => {
    if (open && !alert) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onKeyDown, alert]);

  return (
    <>
      {open && createPortal(
        <div
          onClick={() => !alert && setOpen}
          className={cn(cls.overlay, { [cls.open]: overlay, [cls['close-overlay']]: close })}>
          <div
            onClick={onContentClick}
            className={cn(cls.content, cls[position], { [cls.close]: close }, cls[`p-${padding}`])}>
            {children}
          </div>
        </div >,
        document.body
      )}
    </>
  );
};