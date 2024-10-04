import counterReducer from './modal/slice/counterSlice';

export {
  counterReducer
};

export type { CounterSchema } from './modal/types/counterSchema';
export { Counter } from './ui/Counter';

export { increment, decrement } from './modal/slice/counterSlice';