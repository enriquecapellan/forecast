import { render, screen } from '@testing-library/react';
import { ErrorCard } from '../../components/error-card';

describe('ErrorCard', () => {
  it('renders error message', () => {
    render(<ErrorCard message="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });
});
