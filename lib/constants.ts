const DEFAULT_LOCATION = "Barcelona";
const EXPIRATION_TIME = 30;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const WEATHER_API = process.env.WEATHER_API_KEY;

export { DEFAULT_LOCATION, EXPIRATION_TIME, JWT_SECRET, WEATHER_API };
