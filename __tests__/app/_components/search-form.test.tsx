
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from '../../../app/_components/search-form';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

describe('SearchForm', () => {
  it('renders input and label', () => {
    render(<SearchForm />);
    expect(screen.getByLabelText(/Enter US Address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e.g., 123 Main St/i)).toBeInTheDocument();
  });

  it('does not submit with empty address', () => {
    const { container } = render(<SearchForm />);
    const form = container.querySelector('form');
    fireEvent.submit(form!);

    const mockRouter = require('next/navigation').useRouter();
    expect(mockRouter.push).not.toHaveBeenCalled();
  });
});
