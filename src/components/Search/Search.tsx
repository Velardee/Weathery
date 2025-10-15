// interface SearchProps {

import { getLocation } from "@/services/weatherService";
import type { Location } from "@/types/weather";
import { MapPin, MapPinHouse } from "lucide-react";
import { useEffect, useRef, useState, type FunctionComponent } from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

interface SearchProps {
  getCurrentLocation: () => Promise<void>;
  getSelectedLocation: (location: Location) => void;
}

const Search: FunctionComponent<SearchProps> = ({
  getCurrentLocation,
  getSelectedLocation,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<Location[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const getResults = setTimeout(() => {
      if (inputValue.length < 2) {
        setResults([]);
        setShowResults(false);
        return;
      }
      getLocation(inputValue)
        .then((data) => {
          setResults(data?.results ?? []);
          setShowResults(true);
        })
        .catch(() => {
          setResults([]);
          setShowResults(true);
        })
        .finally(() => {
          setLoadingResults(false);
        });
    }, 1000);

    return () => clearTimeout(getResults);
  }, [inputValue]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 2) {
      setShowResults(true);
      setLoadingResults(true);
    } else {
      setShowResults(false);
      setLoadingResults(false);
    }
  };

  return (
    <div
      ref={searchRef}
      className="w-full relative max-w-2xl flex flex-col md:flex-row gap-3 mt-8 mb-2"
    >
      <div className="w-full relative">
        <input
          type="text"
          className="w-full relative bg-white/20 backdrop-blur-md border border-white/30 rounded-lg h-10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          placeholder="Buscar ciudad..."
          value={inputValue}
          onChange={onChangeSearch}
        />
        {loadingResults && (
          <div className="absolute top-2 right-3">
            <LoadingSpinner width={20} height={20} />
          </div>
        )}
      </div>
      <button
        onClick={getCurrentLocation}
        className="w-full rounded-lg bg-blue-500 text-white h-10 px-3"
      >
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <MapPinHouse size={16} />
          <p>Mi ubicación</p>
        </div>
      </button>

      {showResults && results.length === 0 && !loadingResults && (
        <div className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden z-50 border border-white/30">
          <div className="w-full px-4 py-3 text-gray-900">
            No se encontraron resultados
          </div>
        </div>
      )}

      {showResults && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden z-50 border border-white/30">
          {results.map((location) => (
            <button
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors text-left cursor-pointer"
              key={location.id}
              onClick={() => getSelectedLocation(location)}
            >
              <MapPin />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">
                  {location.name}
                </div>
                <div>
                  {[location.admin1, location.country]
                    .filter(Boolean)
                    .join(", ")}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
