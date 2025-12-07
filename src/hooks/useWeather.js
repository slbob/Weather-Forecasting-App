import { useState } from "react";
import { fetchWeather, fetchForecast } from "../utils/api";

/**
 * Custom hook to manage weather state and API calls
 */
export default function useWeather() {
  const [weather, setWeather] = useState(null);      // Current weather
  const [forecast, setForecast] = useState([]);      // 5-day forecast
  const [loading, setLoading] = useState(false);     // Loading state
  const [error, setError] = useState("");            // Error message

  /**
   * Fetch weather and forecast for a given city
   * @param {string} city - City name
   */
  const searchCity = async (city) => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const currentWeather = await fetchWeather(city);
      const forecastData = await fetchForecast(city);

      setWeather(currentWeather);
      setForecast(forecastData);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    forecast,
    loading,
    error,
    searchCity
  };
}
