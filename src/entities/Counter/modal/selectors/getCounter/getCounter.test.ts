import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should return value object of counter', () => {
    const state: StateSchema = {
      counter: {
        value: 10
      }
    };

    expect(getCounter(state)).toEqual({ value: 10 });
  });
});