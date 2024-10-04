import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { Button } from '@/shared/ui/Button';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import {
  increment,
  decrement
} from '../modal/slice/counterSlice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(state => getCounterValue(state));

  return (
    <div data-testid='counter'>
      <h3 data-testid='counter-value'>{counterValue}</h3>
      <Button
        data-testid='counter-decrement'
        onClick={() => dispatch(decrement())}
        option='btn' variant='primary' size='md'>
        -1
      </Button>
      <Button
        data-testid='counter-increment'
        onClick={() => dispatch(increment())}
        option='btn' variant='primary' size='md'>
        +1
      </Button>
    </div>
  );
};