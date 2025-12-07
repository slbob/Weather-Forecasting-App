import React from "react";
import ForecastItem from "../ForecastItem";
import "./styles.css";

export default function ForecastList({ forecast }) {
  if (!forecast?.length) return null;

  return (
    <div className="forecast-list">
      {forecast.map((item, i) => (
        <ForecastItem key={i} item={item} />
      ))}
    </div>
  );
}
