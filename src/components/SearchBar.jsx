import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

