import './styles/owfont-master/css/owfont-regular.css';
import './styles/WeatherData.css';

export default function WeatherData({ weather, convertTime, convertDay }) {

    const weatherIcon = weather?.weather[0].id

    return (
        <div className="current_temp">
            <h2>{convertDay(weather.dt)}</h2>
            <p>Current Temp:{Math.round(weather.temp.day)}°F</p>
            <p>Feels Like:{Math.round(weather.feels_like.day)}°F</p>
            <p>Humidity:{weather.humidity}%</p>
            <p>Sunrise:{convertTime(weather.sunrise)}</p>
            <p>Sunset:{convertTime(weather.sunset)}</p>
            <p>Weather:{weather?.weather[0]?.description}</p>
            <i className={`owf owf-${weather?.weather[0].id} owf-5x`}></i>
        </div>
    )

}