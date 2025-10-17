import CurrentWeather from "@/components/CurrentWeather/CurrentWeather";
import DailyForecast from "@/components/DailyForecast/DailyForecast";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import NextHours from "@/components/NextHours/NextHours";
import Search from "@/components/Search/Search";
import { WeatherAnimations } from "@/components/WeatherAnimations/WeatherAnimations";
import { getCurrentLocation, getWeather } from "@/services/weatherService";
import type { Location, WeatherResponse } from "@/types/weather";
import { getBackgroundClass } from "@/utils/background";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (
    lat: number,
    lon: number,
    name: string,
    country: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeather(lat, lon, name, country);
      setWeather(data);
    } catch (err) {
      setError("Error al obtener los datos del clima");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetCurrentLocation = async () => {
    setLoading(true);
    setError(null);

    try {
      const position = await getCurrentLocation();

      if (
        position.coords.latitude == weather?.latitude &&
        position.coords.longitude == weather?.longitude
      ) {
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&count=1&language=es&format=json`
      );
      const data = await response.json();

      if (data) {
        const { latitude, longitude } = data;
        fetchWeatherData(latitude, longitude, "Tu ubicación", "");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("No se pudo obtener tu ubicación");
      fetchWeatherData(40.4168, -3.7038, "Madrid", "España");
    } finally {
      setLoading(false);
    }
  };

  const handleGetSelectedLocation = (location: Location) => {
    fetchWeatherData(
      location.latitude,
      location.longitude,
      location.name,
      location.country
    );
  };

  useEffect(() => {
    handleGetCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const weatherBackground = getBackgroundClass(
    weather?.current.weatherCode || 0
  );

  return (
    <div className={`min-h-screen ${weatherBackground} transition-all duration-1000 relative overflow-hidden`}>
      {weather && (
        <WeatherAnimations weatherCode={weather.current.weatherCode} />
      )}
      <div className=" flex flex-col items-center justify-center py-16 px-12 md:px-10">
        <h1 className="text-5xl font-medium text-center text-white">
          Pronóstico del Tiempo
        </h1>
        {loading && (
          <div className="flex flex-col justify-center items-center gap-3 h-[70vh]">
            <LoadingSpinner width={50} height={50} />
            <p className="text-2xl text-white text-center">
              Cargando información del clima...
            </p>
          </div>
        )}
        {weather && !loading && (
          <>
            <Search
              getCurrentLocation={handleGetCurrentLocation}
              getSelectedLocation={handleGetSelectedLocation}
            />
            <CurrentWeather weather={weather?.current} />
            <NextHours hourlyForecast={weather?.hourly} />
            <DailyForecast dailyForecast={weather?.daily} />
          </>
        )}
        {error && !loading && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}
