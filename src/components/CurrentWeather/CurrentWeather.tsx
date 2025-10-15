import type { WeatherData } from "@/types/weather";
import type { FunctionComponent } from "react";
import MainCard from "../MainCard/MainCard";
import { Droplets, MapPin, Thermometer, Wind } from "lucide-react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

interface CurrentWeatherProps {
  weather: WeatherData;
}


const CurrentWeather: FunctionComponent<CurrentWeatherProps> = ({
  weather,
}) => {
  const {
    temperature,
    location,
    country,
    condition,
    humidity,
    time,
    weatherCode,
    windSpeed,
    feelsLike,
  } = weather;
  

  return (
    <MainCard>
      <>
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
            <MapPin color="white"/>
            <h2 className="text-3xl font-bold text-white">{location}</h2>
            </div>
            <p className="text-base text-white">{country}</p>
            <p className="text-sm text-white/90">{time}</p>
          </div>
          <WeatherIcon weatherCode={weatherCode} size={64} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 mt-8">
          <div>
            <span className="text-6xl font-bold text-white">{temperature}°</span>
          </div>
          <div>
            <p className="text-2xl text-white font-medium">{condition}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-evenly gap-3 px-10 md:p-0 mt-8">
          <div className="flex flex-col justify-center items-center gap-1.5 w-3/4 sm:w-5/6 md:w-1/3 h-36 rounded-xl bg-white/15">
            <Droplets color="#2c87e8"/>
            <p className="text-sm text-white/80">Humedad</p>
            <p className="text-2xl font-semibold text-white">{humidity}%</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1.5 w-3/4 sm:w-5/6 md:w-1/3 h-36 rounded-xl bg-white/15">
            <Wind color="#5bc885"/>
            <p className="text-sm text-white/80">Viento</p>
            <p className="text-2xl font-semibold text-white">{windSpeed} km/h</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1.5 w-3/4 sm:w-5/6 md:w-1/3 h-36 rounded-xl bg-white/15">
            <Thermometer color="white"/>
            <p className="text-sm text-white/80">Sensación</p>
            <p className="text-2xl font-semibold text-white">{feelsLike}°</p>
          </div>
        </div>
      </>
    </MainCard>
  );
};

export default CurrentWeather;
