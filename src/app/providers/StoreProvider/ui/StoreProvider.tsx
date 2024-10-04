import { createReduxStore } from '../config/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';


export const StoreProvider = ({
  children,
  initialState
}: {
  children?: ReactNode;
  initialState?: StateSchema;
}) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};