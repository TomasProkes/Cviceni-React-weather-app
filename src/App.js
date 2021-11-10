import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";


const App = () => {
  
  const [weather, setWeather] = useState(null)
  // TODO temporary for testing only
  const city = 'Prague'
  // TODO replace with `` placeholder
  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + process.env.REACT_APP_MY_API_ID

  const fetchWeather = () => {
    fetch(URL)
    .then(response => response.json())
    .then(json => {
      setWeather(json);
      // TODO remove after debug
      console.log(json);
    }
    )
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          {/* <div className="button-group">
            <button className="button">City01</button>
            <button className="button">City02</button>
            <button className="button">City03</button>
          </div> */}

          {weather ? <CurrentWeather weather={weather} /> : 'Loading...............'}

          {/* TODO remove below element */}
          <div className="weather__current">
            <h2 className="weather__city" id="mesto">
              {city}, {weather && weather.sys.country}
            </h2>
            <div className="weather__inner weather__inner--center">
              <div className="weather__section weather__section--temp">
                <span className="weather__temp-value" id="teplota">
                  {Math.round(weather && weather.main.temp)}
                </span>
                <span className="weather__temp-unit">°C</span>
                <div className="weather__description" id="popis">
                  {weather && weather.weather[0].main}
                </div>
              </div>
              <div
                className="weather__section weather__section--icon"
                id="ikona"
              >
                --
                {weather ?
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
                : null}
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Wind</h3>
                <div className="weather__value">
                  <span id="wind">--</span> km/h
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Humidity</h3>
                <div className="weather__value">
                  <span id="humidity">--</span> %
                </div>
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Sunrise</h3>
                <div className="weather__value">
                  <span id="sunrise">--</span>
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Sunset</h3>
                <div className="weather__value">
                  <span id="sunset">--</span>
                </div>
              </div>
            </div>
          </div>
          {/* remove above curr w. element */}
          <div className="weather__forecast" id="predpoved">
            <div className="forecast">
              <div className="forecast__day">Day, date</div>
              <div className="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div className="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
