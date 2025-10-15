export function dailyDateLabel(dateString: string): string {
  const today = new Date();
  const yesterday = new Date(today);
  const date = new Date(dateString);

  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Hoy";
  }

  if (date.toDateString() === yesterday.toDateString()) {
    return "Ayer";
  }
  return date.toLocaleDateString("es-ES", {
    weekday: "short",
  });
}
