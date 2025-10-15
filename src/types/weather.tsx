export interface WeatherData {
    location: string;
    country: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
    weatherCode: number;
    time: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  weatherCode: number;
  precipitation: number;
}

export interface DailyForecastT {
  date: string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
  precipitation: number;
}

export interface WeatherResponse {
  current: WeatherData;
  hourly: HourlyForecast[];
  daily: DailyForecastT[];
  latitude: number;
  longitude: number;
}

export interface Location {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  admin1?: string;
}
