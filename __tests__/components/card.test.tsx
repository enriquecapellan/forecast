import { render, screen } from '@testing-library/react';
import { Card } from '../../components/card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Weather Info</Card>);
    expect(screen.getByText('Weather Info')).toBeInTheDocument();
  });
});
