"use server";

import { cookies } from "next/headers";
import { DEFAULT_LOCATION } from "./constants";

export async function updateLocation(
  _currentState: unknown,
  formData: FormData
) {
  if (!formData.get("location")) {
    console.error("Field can not be empty");
    return "Error: field can not be empty";
  }

  const newLocation = (formData.get("location") as string).trim();
  cookies().set("location", newLocation);

  return "Success";
}

export async function getLocation() {
  const location = hasLocation();
  if (!location) {
    cookies().set("location", DEFAULT_LOCATION);

    return DEFAULT_LOCATION;
  }

  return location;
}

async function hasLocation() {
  const location = cookies().get("location")?.value;

  return location;
}
