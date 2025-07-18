import { render } from '@testing-library/react';
import { WeatherIcon } from '../../../app/_components/weather-icon';

describe('WeatherIcon', () => {
  it('renders correct icon for "sunny"', () => {
    const { container } = render(<WeatherIcon forecast="sunny" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders correct icon for "rain"', () => {
    const { container } = render(<WeatherIcon forecast="rain" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
