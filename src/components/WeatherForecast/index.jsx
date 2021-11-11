import React from 'react';
import '../../App.css';

const WeatherForecast = ({forecast}) => {

    if (!forecast) {
        return null;
    } else {
        console.log('PREDPOVED :')
        console.log(forecast)
        console.log('-----------')
        return (
        <div className="weather__forecast" id="predpoved">
            <div className="forecast">
                <div className="forecast__day">Day, date</div>
                <div className="forecast__icon">
                    <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    style={{ height: "100%" }}
                    alt="current weather icon"
                    />
                </div>
                <div className="forecast__temp">{forecast.main.temp} °C</div>
            </div>
        </div>
        )
    }
}

export default WeatherForecast