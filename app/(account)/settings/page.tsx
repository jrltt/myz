import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLocation } from "@/lib/location.service";
import { LocationForm } from "./components/location-form";

export default async function Settings() {
  const currentLocation = await getLocation();

  return (
    <div className="px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-2 mb-4">
        <h1 className="text-3xl font-extralight text-dark-blue">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          <Link href="#" className="font-light text-mid-blue">
            Account
          </Link>
          <Link href="#">Payments</Link>
          <Link href="#">Support</Link>
          <Link href="#">Advanced</Link>
        </nav>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Update your current location</CardTitle>
              <CardDescription>
                Used to show your weather information and receive alerts.
              </CardDescription>
            </CardHeader>
            <LocationForm userLocation={currentLocation} />
          </Card>
        </div>
      </div>
    </div>
  );
}
