import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return value of counter', () => {
    const state: StateSchema = {
      counter: {
        value: 10
      }
    };

    expect(getCounterValue(state)).toBe(10);
  });
});