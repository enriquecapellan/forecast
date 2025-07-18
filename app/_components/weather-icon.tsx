import {
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  Cloudy,
  Zap,
  Snowflake,
  Wind,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react";

function getIcon(forecast: string) {
  const lower = forecast.toLowerCase();

  switch (true) {
    case lower.includes("thunder"):
      return Zap;
    case lower.includes("drizzle"):
      return CloudDrizzle;
    case lower.includes("rain"):
      return CloudRain;
    case lower.includes("snow"):
      return Snowflake;
    case lower.includes("wind"):
      return Wind;
    case lower.includes("cold"):
      return ThermometerSnowflake;
    case lower.includes("hot"):
      return ThermometerSun;
    case lower.includes("cloudy"):
      return Cloudy;
    case lower.includes("cloud"):
      return Cloud;
    case lower.includes("sun"):
    case lower.includes("clear"):
      return Sun;
    default:
      return Sun;
  }
}

export function WeatherIcon({ forecast }: { forecast: string }) {
  const Icon = getIcon(forecast);
  return <Icon className="w-8 h-8 text-blue-500" />;
}
