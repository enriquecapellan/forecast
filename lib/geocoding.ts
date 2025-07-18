export function extractCoordinates(geoData: any): { lat: number; lng: number } {
  if (
    !geoData ||
    !geoData.result ||
    !geoData.result.addressMatches ||
    geoData.result.addressMatches.length === 0
  ) {
    throw new Error("No matching address found in geocoding response");
  }

  const coordinates = geoData.result.addressMatches[0].coordinates;
  return {
    lat: coordinates.y,
    lng: coordinates.x,
  };
}
