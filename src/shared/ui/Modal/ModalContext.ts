import { createContext, useContext } from 'react';

export type UseModalProps = {
  open: boolean;
  close: boolean;
  setOpen: React.Dispatch<React.SetStateAction<void>>;
}

export const ModalContext = createContext<UseModalProps | null>(null);

const defaultContext = {
  setOpen: () => { },
  open: false,
  close: true,
};

export const useModal = (): UseModalProps => useContext(ModalContext) ?? defaultContext;