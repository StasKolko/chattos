import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { ModalContext } from './ModalContext';

const ANIMATION_DELAY = 450;
export const ModalProvider = ({
  children,
  isOpen = false,
}: {
  children: ReactNode;
  isOpen?: boolean;
}) => {
  const [open, setOpenState] = useState(isOpen);
  const [close, setClose] = useState(!isOpen);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (close) {
      timerRef.current = setTimeout(() => {
        setOpenState(false);
      }, ANIMATION_DELAY);
    } else {
      setOpenState(true);
    }
  }, [close]);

  const setOpen = useCallback(() => {
    const body = document.body;

    if (open) {
      body.style.overflow = 'visible';
    } else {
      body.style.overflow = 'hidden';
    }
    setClose(prev => !prev);
  }, [open]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [open]);

  const modalValue = useMemo(() => ({
    close,
    open,
    setOpen
  }), [close, open, setOpen]);

  return (
    <ModalContext.Provider value={modalValue}>
      {children}
    </ModalContext.Provider>
  );
};
