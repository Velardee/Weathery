interface WeatherAnimationsProps {
  weatherCode: number;
}

export const WeatherAnimations = ({ weatherCode }: WeatherAnimationsProps) => {
  if (weatherCode === 0) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="sun-rays"></div>
      </div>
    );
  }

  if (weatherCode >= 51 && weatherCode <= 67) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`
            }}
          />
        ))}
      </div>
    );
  }

  if (weatherCode >= 71 && weatherCode <= 86) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>
    );
  }

  if (weatherCode >= 95 && weatherCode <= 99) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="lightning"></div>
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="raindrop heavy"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${0.3 + Math.random() * 0.3}s`
            }}
          />
        ))}
      </div>
    );
  }

  if (weatherCode >= 1 && weatherCode <= 3) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="cloud-float"
            style={{
              top: `${20 + Math.random() * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            <div className="floating-cloud"></div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
