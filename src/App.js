import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import { reduceForecasts } from "./utils/filter";


const App = () => {
  
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [city, setCity] = useState('Hradec Kralove')

  const handleButtonClick = (location) => {
    setCity(location)
  }

  const fetchWeather = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_MY_API_ID}`

    fetch(URL)
    .then(response => response.json())
    .then(json => setWeather(json))
  }

  const fetchForecast = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_MY_API_ID}`
    
    fetch(URL)
    .then(response => response.json())
    .then(json => setForecast(reduceForecasts(json.list)))
  }
  
  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          <div className="button-group">
            <button onClick={() => handleButtonClick('Hradec Kralove')} className="button">Hradec Kralove</button>
            <button onClick={() => handleButtonClick('Reykjavik')} className="button">Reykjavik</button>
            <button onClick={() => handleButtonClick('Tenerife')} className="button">Tenerife</button>
          </div>

          {weather ? <CurrentWeather weather={weather} /> : 'Loading.................'}

          <div className="weather__forecast" id="predpoved">
            {forecast ? (forecast.map((f, index) => <WeatherForecast key={index} index={index} forecast={f} />)) : 'Loading.................'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
