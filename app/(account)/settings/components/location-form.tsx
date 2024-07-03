"use client";

import { useState } from "react";
import { updateLocation } from "@/lib/location.service";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { ChevronRight } from "lucide-react";

function Submit({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <CardFooter className="border-t px-6 py-4">
      <Button variant={"z-blue"} disabled={pending || disabled}>
        <ChevronRight className="mr-1" />
        Save
      </Button>
    </CardFooter>
  );
}
export function LocationForm({
  userLocation,
}: {
  userLocation: string | undefined;
}) {
  const [, dispatch] = useFormState(updateLocation, undefined);
  const [location, setLocation] = useState<string | undefined>(userLocation);
  const handleLocationOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocation(event.target.value);
  };

  return (
    <form action={dispatch}>
      <CardContent>
        <Input
          placeholder="Location"
          name="location"
          value={location}
          type="text"
          pattern="[a-zA-Z/\s]"
          onChange={handleLocationOnChange}
        />
      </CardContent>
      <Submit disabled={location?.length === 0} />
    </form>
  );
}
