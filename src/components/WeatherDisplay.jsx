import { Component } from "react";

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeatherData: [],
            dailyWeatherData: [],
            alertWeatherData: []
        }
    }

    async componentDidMount() {

        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.long}&units=imperial&exclude=hourly,minutely&appid=c0186da62fd08500743c0b9e60fd76f2`

        const response = await fetch(url).then(response => response.json());

        //console.log("Weather Data: ", response);
        const currentWeatherData = response.current;
        const dailyWeatherData = response.daily;
        const alertWeatherData = response.alerts;

        this.setState({
            currentWeatherData: currentWeatherData,
            dailyWeatherData: dailyWeatherData,
            alertWeatherData: alertWeatherData
        })

        console.log('State: ', this.state);

    }

    _convertKelvintoFahrenheit(k) {

        const f = (k - 273.15) * (9 / 5) + 32

        return Math.round(f);
    }

    _convertUnixtoLocal(t) {
        let gmt = new Date(t * 1000);
        let hours = gmt.getHours();
        
        if (gmt.getMinutes() < 10) {
            var mins = '0' + gmt.getMinutes();
        } else {
            var mins = gmt.getMinutes();
        };

        if (hours > 12) {
            let hours = gmt.getHours() - 12;
            return hours + ':' + mins + ' ' + 'P.M.'
        } else {
            let hours = gmt.getHours();
            return hours + ':' + mins + ' ' + 'A.M.'
        };
    }

    render() {
        const { currentWeatherData, dailyWeatherData, alertWeatherData } = this.state;
        return (
            <div className="weatherContainer">
                <div className="alertContainer">
                    {alertWeatherData.map((alert, index) => {
                        return (<div key={index}><h4>{alert.event}</h4></div>)
                    })}
                </div>
                <div className="weeklyWeather">

                </div>
                <div className="currentWeather">
                    <h2>{this.props.address}</h2>
                    <div className="current_temp">
                        <p>Current Temp:{Math.round(currentWeatherData.temp)}°F</p>
                        <p>Feels Like:{Math.round(currentWeatherData.feels_like)}°F</p>
                        <p>Humidity:{currentWeatherData.humidity}%</p>
                        <p>Sunrise:{this._convertUnixtoLocal(currentWeatherData.sunrise)}</p>
                        <p>Sunset:{this._convertUnixtoLocal(currentWeatherData.sunset)}</p>
                        <p>Weather:</p>
                    </div>


                </div>
            </div>
        );
    }
}

export default WeatherDisplay;