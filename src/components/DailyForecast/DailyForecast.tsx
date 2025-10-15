import type { DailyForecastT } from "@/types/weather";
import type { FunctionComponent } from "react";
import MainCard from "../MainCard/MainCard";
import { dailyDateLabel } from "@/utils/dailyDateLabel";
import { Droplets } from "lucide-react";

interface DailyForecastProps {
  dailyForecast: DailyForecastT[];
}

const DailyForecast: FunctionComponent<DailyForecastProps> = ({
  dailyForecast,
}) => {
  return (
    <MainCard>
      {dailyForecast?.map((day, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center bg-white/15 rounded-lg py-4 px-6 m-2"
        >
          <h3 className="capitalize text-lg font-medium text-white">
            {dailyDateLabel(day.date)}
          </h3>
          <div className="flex items-center gap-3">
            <Droplets color="white" size={20} strokeWidth="1" />
            <p className="text-white/90">{day.precipitation} %</p>
          </div>
          <p className="text-white font-medium">
            {day.minTemp}°C - {day.maxTemp}°C
          </p>
        </div>
      ))}
    </MainCard>
  );
};

export default DailyForecast;
