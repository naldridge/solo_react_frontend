export default function WeatherData ({weather, convert}) {

    
    return (
        <div className="current_temp">
                        <p>Current Temp:{Math.round(weather.temp.day)}°F</p>
                        <p>Feels Like:{Math.round(weather.feels_like.day)}°F</p>
                        <p>Humidity:{weather.humidity}%</p>
                        <p>Sunrise:{convert(weather.sunrise)}</p>
                        <p>Sunset:{convert(weather.sunset)}</p>
                        <p>Weather:{weather?.weather[0]?.description}</p> 
                    </div>
    )

}