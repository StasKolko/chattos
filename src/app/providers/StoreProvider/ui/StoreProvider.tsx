import { createReduxStore } from '../config/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';


export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};