import { Suspense } from "react";
import { WeatherWidget } from "../components/weather-widget";
import { getLocation } from "@/lib/location.service";

export default async function Dashboard() {
  const location = await getLocation();

  return (
    <>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {location && <WeatherWidget location={location} />}
      </Suspense>
    </>
  );
}
