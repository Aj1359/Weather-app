import React from "react";

export default function WeatherCard({ weather }) {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <h3 className="text-4xl font-semibold">{Math.round(weather.main.temp)}°C</h3>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

