import React from 'react';
import '../../App.css';
import Loading from '../Loading'
import { getHrsMins, unixTimeToDate } from '../../utils/convert2datetime';

const CurrentWeather = ({weather}) => {
    if (!weather.weather[0]) {
        return <Loading />
    } else {
        return (
        <div className={`weather__current ${weather.main.temp < 10 ? 'weather__current--cold' : ''}`}>
            <h2 className="weather__city" id="mesto">
                {`${weather.name}, ${weather.sys.country}`}
            </h2>
            <div className="weather__inner weather__inner--center">
                <div className="weather__section weather__section--temp">
                <span className="weather__temp-value" id="teplota">
                    {Math.round(weather.main.temp)}
                </span>
                <span className="weather__temp-unit">°C</span>
                <div className="weather__description" id="popis">
                    {weather.weather[0].main}
                </div>
                </div>
                <div className="weather__section weather__section--icon" id="ikona">
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        title={weather.weather[0].description}
                    />
                </div>
            </div>
            <div className="weather__inner">
                <div className="weather__section">
                <h3 className="weather__title">Wind</h3>
                <div className="weather__value">
                    <span id="wind">{weather.wind.speed}</span> km/h
                </div>
                </div>
                <div className="weather__section">
                <h3 className="weather__title">Humidity</h3>
                <div className="weather__value">
                    <span id="humidity">{weather.main.humidity}</span> %
                </div>
                </div>
            </div>
            <div className="weather__inner">
                <div className="weather__section">
                <h3 className="weather__title">Sunrise</h3>
                <div className="weather__value">
                    <span id="sunrise">{getHrsMins(weather.sys.sunrise)}</span>
                </div>
                </div>
                <div className="weather__section">
                <h3 className="weather__title">Sunset</h3>
                <div className="weather__value">
                    <span id="sunset">{getHrsMins(weather.sys.sunset)}</span>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CurrentWeather