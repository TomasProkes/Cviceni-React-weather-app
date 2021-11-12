import React from 'react';
import '../../App.css';
import Loading from '../Loading'
import { getDayOfWeek, getMonthAndDate } from '../../utils/convert2datetime';

const WeatherForecast = ({forecast}) => {
    if (!forecast) {
        return <Loading />;
    } else {
        return (
            <div className="forecast">
                <div className="forecast__day">{getDayOfWeek(forecast.dt)}, {getMonthAndDate(forecast.dt)}</div>
                <div className="forecast__icon">
                    <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    style={{ height: "100%" }}
                    alt={forecast.weather[0].main}
                    title={forecast.weather[0].description}
                    />
                </div>
                <div className="forecast__temp">{Math.round(forecast.main.temp)} °C</div>
            </div>
        )
    }
}

export default WeatherForecast