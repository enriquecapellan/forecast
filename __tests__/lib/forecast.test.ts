import { mapForecastToDailySummaries } from '../../lib/forecast';

describe('mapForecastToDailySummaries', () => {
  it('maps periods to daily summaries', () => {
    const periods = [
      { name: 'Monday', isDaytime: true, shortForecast: 'Sunny', detailedForecast: 'Clear sky', temperature: 25, temperatureUnit: 'C', probabilityOfPrecipitation: { value: 10 } },
      { name: 'Monday Night', isDaytime: false, shortForecast: 'Clear', detailedForecast: 'No clouds', temperature: 15, temperatureUnit: 'C', probabilityOfPrecipitation: { value: 0 } }
    ];
    const result = mapForecastToDailySummaries(periods);
    expect(result).toEqual([
      {
        day: 'Monday',
        dayPart: {
          description: 'Sunny',
          forecast: 'Clear sky',
          temperature: '25°C',
          precipitation: '10%'
        },
        nightPart: {
          description: 'Clear',
          forecast: 'No clouds',
          temperature: '15°C',
          precipitation: '0%'
        }
      }
    ]);
  });

  it('handles empty periods', () => {
    expect(mapForecastToDailySummaries([])).toEqual([]);
  });
});
