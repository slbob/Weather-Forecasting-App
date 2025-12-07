// Convert temperature between Celsius and Fahrenheit
export function convertTemp(temp, toUnit = "C") {
  if (toUnit === "F") {
    return Math.round((temp * 9) / 5 + 32);
  }
  return Math.round(temp); // Celsius
}

// Format wind speed from m/s to km/h or mph
export function formatWind(speed, unit = "km/h") {
  if (unit === "mph") {
    return Math.round(speed * 2.23694); // m/s to mph
  }
  return Math.round(speed * 3.6); // m/s to km/h
}

// Capitalize first letter of each word in a string
export function capitalizeWords(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Format Unix timestamp to readable date string
export function formatDate(timestamp, options = {}) {
  const date = new Date(timestamp * 1000);
  const defaultOptions = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, { ...defaultOptions, ...options });
}

// Get day of the week from Unix timestamp
export function getDayOfWeek(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString(undefined, { weekday: "short" });
}
