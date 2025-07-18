import { render } from "@testing-library/react";
import { WeatherResultsSkeleton } from "../../../app/_components/weather-results-skeleton";

describe("WeatherResultsSkeleton", () => {
  it("renders 7 skeleton cards", () => {
    const { container } = render(<WeatherResultsSkeleton />);
    expect(container.querySelectorAll(".animate-pulse").length).toBe(7);
  });
});
