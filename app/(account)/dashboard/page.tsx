import { Suspense } from "react";
import { WeatherWidget } from "../components/weather-widget";
import { getLocation } from "@/lib/location.service";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Headset,
  House,
  Plane,
  SquareArrowOutUpRight,
  Wind,
} from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
  const location = await getLocation();

  return (
    <>
      <div className="px-4 pb-4 md:px-8 mx-auto grid w-full max-w-7xl gap-2">
        <h1 className="text-3xl font-extralight text-dark-blue">
          Welcome user!
        </h1>
      </div>
      <main className="flex flex-1 flex-col gap-4 px-4 md:gap-8 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="min-h-[186px] bg-z-blue/25">
            <Suspense fallback={<p>Loading...</p>}>
              {location && <WeatherWidget location={location} />}
            </Suspense>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Air quality</CardTitle>
              <Wind className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground min-h-10">
                Please configure the air quality settings to avoid potential
                risks on your current location.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                size="sm"
                variant="z-white"
                className="mr-auto gap-1"
              >
                <Link href="#">
                  <ChevronRight className="h-4 w-4" />
                  Configure
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Travel insurance</CardTitle>
              <Plane className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3 min-h-8">
                Protect what matters to you with our personal insurance
                products.
              </p>
            </CardContent>
            <CardFooter className="justify-start">
              <Button
                asChild
                size="sm"
                variant="z-white"
                className="mr-auto gap-1"
              >
                <Link href="#">
                  Contract
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Online chat</CardTitle>
              <Headset className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3">
                Talk to us 24/7. Speak to someone about your life insurance,
                pension or investment.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                size="sm"
                variant="z-white"
                className="mr-auto gap-1"
              >
                <Link href="#">
                  Open a new chat
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="font-extralight text-mid-blue">
                  Home Devices
                </CardTitle>
                <CardDescription>
                  Configure your home address and connect your HUB/devices to
                  see their status here. Stay informed with alerts from your
                  door sensors and weather updates.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className=" bg-dove p-4 flex items-center justify-center flex-col">
              <House className="text-muted-foreground mb-2" />
              <p className="text-muted-foreground text-sm">
                Please configure your address and connect your HUB
              </p>
            </CardContent>
            <CardFooter className=" bg-dove p-4 flex align-middle justify-center">
              <Button
                asChild
                size="sm"
                variant="z-white"
                className="mr-4 gap-1"
              >
                <Link href="#">
                  <ChevronRight className="h-4 w-4" />
                  Configure
                </Link>
              </Button>
              <Button asChild size="sm" variant="z-white" className=" gap-1">
                <Link href="#">
                  Read more
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-extralight text-mid-blue">
                Latest news
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none truncate">
                    Zurich and Aon to support net-zero transition through new
                    clean hydrogen insurance facility
                  </p>
                  <p className="text-sm text-muted-foreground">July 01, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Zurich to acquire AIG’s global personal travel insurance
                    business
                  </p>
                  <p className="text-sm text-muted-foreground">June 26, 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none truncate">
                    Zurich acquires majority stake in Kotak General Insurance;
                    to build a leading general insurer for India
                  </p>
                  <p className="text-sm text-muted-foreground">June 19, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
