import React, { useState } from "react";
import "./styles.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}
