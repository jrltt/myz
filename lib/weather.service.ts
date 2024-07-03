"use server";

import { WEATHER_API, DEFAULT_LOCATION } from "./constants";

export async function getWeather(
  { location }: { location: string } = { location: DEFAULT_LOCATION }
) {
  const baseURL = "http://api.weatherapi.com/v1";
  const params = new URLSearchParams({
    key: WEATHER_API as string,
    q: location,
  });
  try {
    const data = await fetch(`${baseURL}/current.json?${params.toString()}`);
    const response = await data.json();

    return response;
  } catch (error: any) {
    console.log(error);
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
