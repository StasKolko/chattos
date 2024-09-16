import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render without crashing when className is provided', () => {
    const { container } = render(<Loader className="test-class" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should handle empty string for className', () => {
    const { container } = render(<Loader className="" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render without crashing when no className is provided', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toBeInTheDocument();
  });
});