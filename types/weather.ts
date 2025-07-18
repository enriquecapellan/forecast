type ForecastPeriod = {
  temperature: string;
  precipitation: string;
  description: string;
  forecast: string;
};

export type DailyForecast = {
  day: string;
  dayPart?: ForecastPeriod;
  nightPart?: ForecastPeriod;
};

export type Forecast =
  | {
      error: null;
      data: DailyForecast[];
    }
  | {
      error: string;
      data: null;
    };
