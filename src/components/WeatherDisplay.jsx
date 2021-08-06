import { Component } from "react";
import WeatherData from "./WeatherData";

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

        console.log("Weather Data: ", response);
        const currentWeatherData = response.current;
        const dailyWeatherData = response.daily;
        let alertWeatherData = [];
        if (!!response.alerts) {
            alertWeatherData = response.alerts;
        }

        this.setState({
            currentWeatherData: currentWeatherData,
            dailyWeatherData: dailyWeatherData,
            alertWeatherData: alertWeatherData
        })

      //  console.log('State: ', this.state);
       // console.log('Weather Description', currentWeatherData.weather[0].description);

    }

    _tomorrowWeather = () => {
        this.setState({
            currentWeatherData: this.state.dailyWeatherData[2]
        })
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

    _convertUnixtoDayofWeek(d) {
        let stamp = new Date(d * 1000);
        let day = stamp.toLocaleDateString('en-US', { weekday: 'short' });
        let dateNote = stamp.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })

        return day + ' ' + dateNote;
    }

    render() {
        const { currentWeatherData, dailyWeatherData, alertWeatherData } = this.state;
        //console.log("Weather Data: ", currentWeatherData.weather)
        return (
            <div className="weatherContainer">
                <h2>{this.props.address}</h2>
                <div className="alertContainer">
                    {alertWeatherData.length > 0 ? (
                        alertWeatherData.map((alert, index) => {
                            return (<div key={index}><h4>{alert.event}</h4></div>)
                        })
                    ) : (<></>)}
                </div>
                <div className="weeklyWeather">
                    {dailyWeatherData.map((data, index) => {
                        return (<div key={index}>{this._convertUnixtoDayofWeek(data.dt)}</div>)
                    })}
                </div>
                <div className="currentWeather">
                    {currentWeatherData.weather ? <WeatherData weather={currentWeatherData} convert={this._convertUnixtoLocal}/>  : '' }

                        <button onClick={() => this._tomorrowWeather()}>Tomorrow</button>
                </div>
            </div >
        );
    }
}

export default WeatherDisplay;



{/* (<div className="current_temp">
                        <p>Current Temp:{Math.round(currentWeatherData.temp)}°F</p>
                        <p>Feels Like:{Math.round(currentWeatherData.feels_like)}°F</p>
                        <p>Humidity:{currentWeatherData.humidity}%</p>
                        <p>Sunrise:{this._convertUnixtoLocal(currentWeatherData.sunrise)}</p>
                        <p>Sunset:{this._convertUnixtoLocal(currentWeatherData.sunset)}</p>
                         <p>Weather:{currentWeatherData?.weather[0]?.description}</p>
                    </div> })*/}