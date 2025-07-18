import { render, screen } from '@testing-library/react';
import { Input } from '../../components/input';

describe('Input', () => {
  it('renders input element', () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input className="custom-input" placeholder="Styled" />);
    const input = screen.getByPlaceholderText('Styled');
    expect(input).toHaveClass('custom-input');
  });

  it('renders with type prop', () => {
    render(<Input type="password" placeholder="Password" />);
    const input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');
  });
});
