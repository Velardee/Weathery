import { DateTime } from "luxon";

type WeatherRange = {
  range: [number, number];
  day: string;
  night: string;
};

export const getBackgroundClass = (
  weatherCode: number,
  time: string
): string => {
  const isDay = isSunOut(time);

  const backgrounds: WeatherRange[] = [
    {
      range: [0, 3],
      day: "bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300",
      night: "bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700",
    },
    {
      range: [45, 48],
      day: "bg-gradient-to-br from-gray-500 via-slate-500 to-gray-400",
      night: "bg-gradient-to-br from-gray-800 via-slate-800 to-gray-700",
    },
    {
      range: [51, 67],
      day: "bg-gradient-to-br from-slate-600 via-gray-600 to-slate-500",
      night: "bg-gradient-to-br from-slate-800 via-gray-800 to-slate-700",
    },
    {
      range: [71, 86],
      day: "bg-gradient-to-br from-blue-200 via-slate-300 to-gray-300",
      night: "bg-gradient-to-br from-blue-200 via-slate-300 to-gray-300",
    },
    {
      range: [95, 99],
      day: "bg-gradient-to-br from-slate-800 via-gray-700 to-slate-600",
      night: "bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700",
    },
  ];

  const match = backgrounds?.find(({ range }: WeatherRange) => {
    return weatherCode >= range[0] && weatherCode <= range[1];
  });
  return (
    match?.[isDay ? "day" : "night"] ??
    "bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300"
  );
};

export function isSunOut(time: string): boolean {
  if (!time) return true;
  const currentHour = DateTime.fromFormat(time, "HH:mm");

  const roundedHour =
    currentHour.minute >= 30
      ? currentHour.plus({ hours: 1 }).toFormat("HH")
      : currentHour.toFormat("HH");

  if (Number(roundedHour) >= 8 && Number(roundedHour) <= 19) {
    return true;
  }
  return false;
}
