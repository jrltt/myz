import { getWeather } from "@/lib/weather.service";

export async function WeatherWidget({ location }: { location: string }) {
  const data = await getWeather({ location });
  const currentLocation = data?.location;

  return <pre>{JSON.stringify(currentLocation, null, 2)}</pre>;
}
