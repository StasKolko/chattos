import {
  configureStore,
  createSelector,
  ReducersMapObject
} from '@reduxjs/toolkit';
import {
  useDispatch,
  useSelector,
  useStore
} from 'react-redux';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
  };


  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export const store = createReduxStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();