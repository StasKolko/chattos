import { CounterSchema } from '../types/counterSchema';
import {
  increment,
  decrement
} from './counterSlice';
import counterReducer from './counterSlice';

describe('counterSlice', () => {
  it('should work with empty state', () => {
    expect(
      counterReducer(undefined, increment())
    ).toEqual({ value: 1 });

    expect(
      counterReducer(undefined, decrement())
    ).toEqual({ value: -1 });
  });

  it('should increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(
      counterReducer(state, increment())
    ).toEqual({ value: 11 });
  });

  it('should decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(
      counterReducer(state, decrement())
    ).toEqual({ value: 9 });
  });
});