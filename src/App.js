import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = "YOUR_API_KEY"; // replace with your OpenWeatherMap API key
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold mb-6">🌦 Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

