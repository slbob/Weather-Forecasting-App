const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Fetch current weather for a given city
 * @param {string} city - City name
 */
export async function fetchWeather(city) {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch current weather");
  }
  const data = await response.json();
  return {
    city: data.name,
    temp: data.main.temp,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}

/**
 * Fetch 5-day forecast for a given city
 * @param {string} city - City name
 */
export async function fetchForecast(city) {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch forecast");
  }
  const data = await response.json();
  // Extract one forecast per day (around 12:00 pm)
  const dailyForecast = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  ).map((item) => ({
    day: new Date(item.dt * 1000).toLocaleDateString(undefined, { weekday: "short" }),
    temp: item.main.temp,
    description: item.weather[0].description,
    icon: item.weather[0].icon,
  }));

  return dailyForecast;
}
