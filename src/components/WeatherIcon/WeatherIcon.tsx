import {
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  Wind,
} from "lucide-react";
import type { FunctionComponent } from "react";

interface WeatherIconProps {
  weatherCode: number;
  size?: number;
}

const WeatherIcon: FunctionComponent<WeatherIconProps> = ({
  weatherCode,
  size = 64,
}) => {
  const getIconToShow = () => {
    if (weatherCode === 0) return <Sun size={size} className="text-yellow-400" />;
    if (weatherCode <= 3) return <CloudSun size={size} className="text-gray-300" />;
    if (weatherCode <= 48) return <CloudFog size={size} className="text-gray-400" />;
    if (weatherCode <= 57)
      return <CloudDrizzle size={size} className="text-blue-300" />;
    if (weatherCode <= 67) return <CloudRain size={size} className="text-blue-400" />;
    if (weatherCode <= 77) return <CloudSnow size={size} className="text-blue-100" />;
    if (weatherCode <= 82) return <CloudRain size={size} className="text-blue-500" />;
    if (weatherCode <= 86) return <CloudSnow size={size} className="text-blue-200" />;
    if (weatherCode <= 99)
      return <CloudLightning size={size} className="text-purple-400" />;
    return <Wind size={size} className="text-gray-400" />;
  };

  return <>{getIconToShow()}</>;
};

export default WeatherIcon;
