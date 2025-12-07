import React from "react";
import "./styles.css";

export default function ForecastItem({ item }) {
  return (
    <div className="forecast-item">
      <p className="day">{item.day}</p>
      <p className="temp">{Math.round(item.temp)}°C</p>
      <p className="desc">{item.description}</p>
    </div>
  );
}
