import React from "react";
import "./styles.css";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p className="temp">{Math.round(weather.temp)}°C</p>
      <p>{weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind} km/h</p>
    </div>
  );
}
