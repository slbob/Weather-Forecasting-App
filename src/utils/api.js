export async function fetchWeather(city){return {city, temp:22, humidity:50, wind:10, description:'Clear'};}
export async function fetchForecast(city){return [{day:'Mon',temp:20,description:'Cloudy'},{day:'Tue',temp:18,description:'Rain'}];}
