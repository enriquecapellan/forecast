import { Suspense } from "react";

import { SearchForm } from "./_components/search-form";
import { WeatherResults } from "./_components/weather-results";
import { WeatherResultsSkeleton } from "./_components/weather-results-skeleton";

type Props = {
  searchParams: Promise<{ address?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { address } = await searchParams;

  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          7-Day Weather Forecast
        </h1>
      </div>
      <SearchForm />
      <Suspense key={address} fallback={<WeatherResultsSkeleton />}>
        <WeatherResults address={address} />
      </Suspense>
    </main>
  );
}
