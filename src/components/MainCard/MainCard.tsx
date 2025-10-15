import type { FunctionComponent } from "react";

interface MainCardProps {
  children: React.ReactNode;
}

const MainCard: FunctionComponent<MainCardProps> = ({ children }) => {
  return (
    <section className="w-full max-w-[1320px] gap-7 border border-white/50 bg-white/20 backdrop-blur-xs rounded-2xl p-4 sm:p-6 md:p-8 mt-8">
      {children}
    </section>
  );
};

export default MainCard;
