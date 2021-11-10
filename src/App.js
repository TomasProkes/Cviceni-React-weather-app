import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";


const App = () => {
  
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Prague')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_MY_API_ID}`

  const fetchWeather = () => {
    fetch(URL)
    .then(response => response.json())
    .then(json => setWeather(json))
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
