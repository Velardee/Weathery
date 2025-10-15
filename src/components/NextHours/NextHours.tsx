import type { HourlyForecast } from "@/types/weather";
import type { FunctionComponent } from "react";
import MainCard from "../MainCard/MainCard";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { Droplets } from "lucide-react";

interface NextHoursProps {
  hourlyForecast: HourlyForecast[];
}

const NextHours: FunctionComponent<NextHoursProps> = ({ hourlyForecast }) => {

  return (
    <MainCard>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-white">Próximas horas</h2>
        <div className="flex gap-4 overflow-x-auto py-3">
          {hourlyForecast.length === 0 ? (
            <p>No hay pronósticos disponibles</p>
          ) : (
            hourlyForecast.map((hour, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col gap-2 justify-center items-center bg-white/15 rounded-lg py-4 px-6 m-1"
              >
                <span className="text-white/90">{hour.time}</span>
                <WeatherIcon weatherCode={hour.weatherCode} size={32} />
                <span className="text-white text-xl font-medium">{hour.temperature}°</span>
                <div className="flex gap-1 items-center">
                  <Droplets color="white" size={20} strokeWidth="1"/>
                  <span className="text-white">{hour.precipitation}%</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </MainCard>
  );
};

export default NextHours;
