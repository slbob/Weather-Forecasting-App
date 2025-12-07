import React from "react";


const ForecastList = ({ forecast }) => {
if (!forecast) return null;


return (
<div className="forecast-list">
<h3>Forecast</h3>
<ul>
{forecast.map((item, index) => (
<li key={index}>
<p>{item.date}</p>
<p>Temp: {item.temp}°C</p>
</li>
))}
</ul>
</div>
);
};


export default ForecastList;
