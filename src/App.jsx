import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "6acb1a5237c72587dbd6c3935ad37940";

function Weather() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("Moroco");

  useEffect(() => {
    async function fetchWeather() {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      );

      setWeather(result.data);
    }

    fetchWeather();
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(e.target.elements.location.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="location" placeholder="Enter a location" />
        <button>Submit</button>
      </form>
      {weather.main ? (
        <div>
          <p>Temperature: {weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
