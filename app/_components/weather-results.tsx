import { Card, CardContent } from "@/components/card";
import { ErrorCard } from "@/components/error-card";
import { WeatherIcon } from "@/app/_components/weather-icon";
import { getForecast } from "@/lib/forecast";

type Props = {
  address?: string;
};

export async function WeatherResults({ address }: Props) {
  if (!address) return null;

  const { error, data } = await getForecast(address);

  if (error !== null) return <ErrorCard message={error} />;

  return (
    <div className="flex gap-4 pb-4 justify-between overflow-x-auto w-full">
      {data.map((period) => (
        <Card
          key={period.day}
          className="w-[150px] h-auto min-h-[300px] shadow-md hover:shadow-lg transition-shadow duration-200 flex-shrink-0"
        >
          <CardContent className="p-0 h-full flex flex-col divide-y divide-gray-200">
            <div
              className={`flex-1 p-4 flex flex-col gap-2 items-center ${
                !period.nightPart ? "flex flex-col justify-center" : ""
              }`}
            >
              <h3 className="font-semibold text-gray-900 text-sm">
                {period.day}
              </h3>

              {period.dayPart && (
                <>
                  <div className="flex justify-center">
                    <WeatherIcon forecast={period.dayPart.description} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {period.dayPart.temperature}
                  </p>
                  <p className="text-xs text-gray-600 leading-tight text-center">
                    {period.dayPart.description}
                  </p>
                </>
              )}
            </div>

            {period.nightPart && (
              <div className="flex-1 p-4 flex flex-col gap-2 items-center bg-gray-50">
                <h4 className="text-xs text-gray-500">Night</h4>
                <div className="flex justify-center">
                  <WeatherIcon forecast={period.nightPart.description} />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {period.nightPart.temperature}
                </p>
                <p className="text-xs text-gray-600 text-center leading-tight">
                  {period.nightPart.description}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
