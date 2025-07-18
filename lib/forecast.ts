import { DailyForecast, Forecast } from "@/types/weather";
import { extractCoordinates } from "./geocoding";

export function mapForecastToDailySummaries(periods: any[]): DailyForecast[] {
  const daysMap: Record<string, DailyForecast> = {};

  periods.forEach((period) => {
    console.log(period.name)
    const baseDay = ["Tonight", "This Afternoon"].includes(period.name)
      ? "Today"
      : period.name.replace(" Night", "");
    const part = period.isDaytime ? "dayPart" : "nightPart";

    if (!daysMap[baseDay]) {
      daysMap[baseDay] = { day: baseDay };
    }

    daysMap[baseDay][part] = {
      description: period.shortForecast,
      forecast: period.detailedForecast,
      temperature: `${period.temperature}°${period.temperatureUnit}`,
      precipitation: `${period.probabilityOfPrecipitation?.value ?? 0}%`,
    };
  });

  return Object.values(daysMap);
}

export async function getForecast(address: string): Promise<Forecast> {
  try {
    // Step 1: Fetch geocoding data
    const geoRes = await fetch(`${process.env.GEOCODE_API}${address}`);
    const geoData = await geoRes.json();
    const { lat, lng } = extractCoordinates(geoData);

    // Step 2: Fetch weather data
    const pointRes = await fetch(`${process.env.WEATHER_API}${lat},${lng}`);
    const pointData = await pointRes.json();

    // 3. Fetch forecast
    const forecastRes = await fetch(pointData.properties.forecast);

    if (!forecastRes.ok) throw new Error("Forecast API failed");

    const forecastData = await forecastRes.json();

    // 4. Return mapped data
    return {
      error: null,
      data: mapForecastToDailySummaries(forecastData.properties.periods),
    };
  } catch (err: any) {
    const error = (err as Error).message;
    return { error, data: null };
  }
}
