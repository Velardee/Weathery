import type {
  DailyForecastT,
  HourlyForecast,
  WeatherData,
  WeatherResponse,
} from "@/types/weather";

import { DateTime } from "luxon";

const GEOCODING_API = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export const getLocation = async (name: string): Promise<[]> => {
  const response = await fetch(
    `${GEOCODING_API}?name=${encodeURIComponent(
      name
    )}&count=10&language=es&format=json`
  );

  const data = await response.json();

  return data ?? [];
};

const getWeatherCondition = (code: number): string => {
  if (code === 0) return "Despejado";
  if (code <= 3) return "Parcialmente nublado";
  if (code <= 48) return "Nublado";
  if (code <= 67) return "Lluvia";
  if (code <= 77) return "Nieve";
  if (code <= 82) return "Lluvia intensa";
  if (code <= 86) return "Nieve intensa";
  if (code <= 99) return "Tormenta";
  return "Desconocido";
};

export const getWeather = async (
  latitude: number,
  longitude: number,
  locationName: string,
  country: string
): Promise<WeatherResponse> => {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
    hourly: "temperature_2m,weather_code,precipitation_probability",
    daily:
      "temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max",
      timezone: "auto"
  });

  const response = await fetch(`${WEATHER_API}?${params}`);

  const data = await response.json();

  const currentTime = DateTime.fromISO(data.current.time, { zone: data.timezone }).toFormat("HH:mm");
  const current: WeatherData = {
    location: locationName,
    country: country,
    temperature: Math.round(data.current.temperature_2m),
    condition: getWeatherCondition(data.current.weather_code),
    humidity: data.current.relative_humidity_2m,
    windSpeed: Math.round(data.current.wind_speed_10m),
    feelsLike: Math.round(data.current.apparent_temperature),
    weatherCode: data.current.weather_code,
    time: currentTime
  };

  const now = new Date();
  const currentHour = now.getHours();

  const hourly: HourlyForecast[] = data.hourly.time
    .slice(0, 24)
    .map((time: string, index: number) => ({
        time: new Date(time).toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: data.timezone,
        }),
      temperature: Math.round(data.hourly.temperature_2m[index]),
      weatherCode: data.hourly.weather_code[index],
      precipitation: data.hourly.precipitation_probability[index],
    }))
    .filter((_: unknown, index: number) => index >= currentHour);

  console.log("hourly", hourly);

  const daily: DailyForecastT[] = data.daily.time.map(
    (date: string, index: number) => ({
      date: new Date(date),
      maxTemp: Math.round(data.daily.temperature_2m_max[index]),
      minTemp: Math.round(data.daily.temperature_2m_min[index]),
      weatherCode: data.daily.weather_code[index],
      precipitation: data.daily.precipitation_probability_max[index],
    })
  );

  return { current, hourly, daily, latitude, longitude };
};

export const getCurrentLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no disponible'));
      return
    }
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
