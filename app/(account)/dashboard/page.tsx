import { Suspense } from "react";
import { WeatherWidget } from "../components/weather-widget";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <WeatherWidget location="Bilbao" />
      </Suspense>
    </>
  );
}
