import { renderWithProviders } from '@/shared/lib/test';
import { Counter } from './Counter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('should render', () => {
    renderWithProviders({
      children: <Counter />,
      initialState: { counter: { value: 10 } }
    });

    const counter = screen.getByTestId('counter');

    expect(counter).toBeInTheDocument();
  });

  it('should increment', async () => {
    renderWithProviders({
      children: <Counter />,
      initialState: { counter: { value: 10 } }
    });

    const counterIncrement = screen.getByTestId('counter-increment');
    const counterValue = screen.getByTestId('counter-value');

    const user = userEvent.setup();
    await user.click(counterIncrement);

    expect(counterValue).toHaveTextContent('11');
  });

  it('should decrement', async () => {
    renderWithProviders({
      children: <Counter />,
      initialState: { counter: { value: 10 } }
    });

    const counterDecrement = screen.getByTestId('counter-decrement');
    const counterValue = screen.getByTestId('counter-value');

    const user = userEvent.setup();
    await user.click(counterDecrement);

    expect(counterValue).toHaveTextContent('9');
  });
});