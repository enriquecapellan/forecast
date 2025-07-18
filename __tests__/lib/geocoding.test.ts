import { extractCoordinates } from '../../lib/geocoding';

describe('extractCoordinates', () => {
  it('returns lat/lng from valid geoData', () => {
    const geoData = {
      result: {
        addressMatches: [
          { coordinates: { y: 10, x: 20 } }
        ]
      }
    };
    expect(extractCoordinates(geoData)).toEqual({ lat: 10, lng: 20 });
  });

  it('throws error for missing addressMatches', () => {
    expect(() => extractCoordinates({ result: { addressMatches: [] } })).toThrow();
  });

  it('throws error for missing result', () => {
    expect(() => extractCoordinates({})).toThrow();
  });
});
