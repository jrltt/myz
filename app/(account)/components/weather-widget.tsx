import { getWeather } from "@/lib/weather.service";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CloudSun, Cloudy, Sun } from "lucide-react";
import { timeAgo } from "@/lib/utils";

export async function WeatherWidget({ location }: { location: string }) {
  const data = await getWeather({ location });
  const currentLocation = data?.location;
  const weatherInformation = data?.current;

  function displayIcon(conditionText: string) {
    if (conditionText.match(/cloud/i)) {
      return <Cloudy className="w-6 h-6 text-sky-500" />;
    }
    if (conditionText.match(/sun/i)) {
      return <Sun className="w-6 h-6 text-sky-500" />;
    }

    return <CloudSun className="w-6 h-6 text-sky-500" />;
  }
  return (
    <>
      {/* <pre>{JSON.stringify(currentLocation, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(weatherInformation, null, 2)}</pre> */}
      <CardHeader>
        <div className="flex items-center gap-2">
          {displayIcon(weatherInformation?.condition.text)}
          <CardTitle>Current weather</CardTitle>
        </div>
        <CardDescription>
          {currentLocation?.name}, {currentLocation?.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {weatherInformation?.condition.text}
            </p>
            <p className="text-sm text-muted-foreground">
              Temperature:{" "}
              <span className="text-foreground">
                {weatherInformation?.temp_c} °C
              </span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Last update: {timeAgo(weatherInformation?.last_updated)}
        </p>
      </CardFooter>
    </>
  );
}
