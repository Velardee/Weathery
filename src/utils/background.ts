export const getBackgroundClass = (weatherCode: number): string => {
  if (weatherCode >= 0 && weatherCode <= 3) {
    return "min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300";
  }

  if (weatherCode >= 45 && weatherCode <= 48) {
    return "min-h-screen bg-gradient-to-br from-gray-500 to-gray-400";
  }

  if (weatherCode >= 45 && weatherCode <= 48) {
    return "bg-gradient-to-br from-gray-500 via-slate-500 to-gray-400";
  }

  if (weatherCode >= 51 && weatherCode <= 67) {
    return "bg-gradient-to-br from-slate-600 via-gray-600 to-slate-500";
  }

  if (weatherCode >= 71 && weatherCode <= 86) {
    return "bg-gradient-to-br from-blue-200 via-slate-300 to-gray-300";
  }

  if (weatherCode >= 95 && weatherCode <= 99) {
    return "bg-gradient-to-br from-slate-800 via-gray-700 to-slate-600";
  }

  return "min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300";
};
