import React from "react";


const WeatherCard = ({ data }) => {
if (!data) return null;


return (
<div className="weather-card">
<h2>{data.name}</h2>
<p>{data.weather[0].description}</p>
<div className="details">
<p>🌡 Temperature: {data.main.temp}°C</p>
<p>💧 Humidity: {data.main.humidity}%</p>
<p>🌬 Wind: {data.wind.speed} m/s</p>
</div>
</div>
);
};


export default WeatherCard;
