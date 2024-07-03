"use server";

import { WEATHER_API, DEFAULT_LOCATION } from "./constants";

export async function getWeather(
  { location }: { location: string } = { location: DEFAULT_LOCATION }
) {
  const baseURL = "http://api.weatherapi.com/v1";

  try {
    if (!WEATHER_API) throw Error("Missing API Key");

    const params = new URLSearchParams({
      key: WEATHER_API as string,
      q: location,
    });
    const data = await fetch(`${baseURL}/current.json?${params.toString()}`);
    const response = await data.json();

    return response;
  } catch (error: any) {
    console.log(error);
    if (error) {
      return "Something went wrong.";
    }
    throw error;
  }
}
