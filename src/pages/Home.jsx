import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import ErrorBanner from "../components/ErrorBanner";
import Loader from "../components/Loader";
import useWeather from "../hooks/useWeather";
import "../styles/global.css";

export default function Home() {
  const { weather, forecast, loading, error, searchCity } = useWeather();

  return (
    <div className="home-page">
      <Header />
      
      {/* Search input */}
      <SearchBar onSearch={searchCity} />

      {/* Error message */}
      {error && <ErrorBanner message={error} />}

      {/* Loading spinner */}
      {loading && <Loader />}

      {/* Current weather */}
      {weather && <WeatherCard weather={weather} />}

      {/* 5-day forecast */}
      {forecast && forecast.length > 0 && <ForecastList forecast={forecast} />}
    </div>
  );
}
