import type { FunctionComponent } from "react";

interface LoadingSpinnerProps {
  baseColor?: string;
  indicatorColor?: string;
  width?: number;
  height?: number;
}

const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({
  baseColor = "#d1d5dc",
  indicatorColor = "#ffffff",
  width = 35,
  height = 35,
}) => {
  return (
    <div
      className={`animate-spin border-4 rounded-full`}
      style={{
        borderColor: baseColor,
        borderTopColor: indicatorColor,
        width,
        height,
      }}
    ></div>
  );
};

export default LoadingSpinner;
