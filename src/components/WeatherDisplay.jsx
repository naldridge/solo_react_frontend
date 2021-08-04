import ZipForm from "./ZipForm";
import { Component } from "react";

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: []
        }
    }

   async componentDidMount() {

       const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.long}&appid=c0186da62fd08500743c0b9e60fd76f2`

       const response = await fetch(url).then(response => response.json());

       console.log("Weather Data: ", response);
   }

   render() {
       return (
           <>
           </>
       );
   }
}

export default WeatherDisplay;