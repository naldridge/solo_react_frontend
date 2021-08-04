import { Component } from "react";
import WeatherDisplay from './WeatherDisplay';

class ZipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            lat: '',
            long: ''
        }
    }

    _handleChange = (field, val) => {
        this.setState({
            [field]: val,
        });
    };

    _handleSubmit = async (e) => {
        e.preventDefault();

        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.zip}&key=AIzaSyDzmHJp1OGtR8iTZRFFGzwIXfpbC6pP8Pk`;
        const response = await fetch(url).then(response => response.json());


        const newLat = response.results[0].geometry.location.lat;
        const newLong = response.results[0].geometry.location.lng;

        this.setState({
            lat: newLat,
            long: newLong
        });
        console.log("Lat: ", this.state.lat);
        console.log("Long: ", this.state.long);

        
    }

    render() {
        const { lat, long } = this.state;

        return (
            <div className="ZipSearch">
                <form onSubmit={this._handleSubmit}>
                    <input type="text" value={this.state.zip} onChange={(e) => {
                            this._handleChange('zip', e.target.value)
                        }}/>
                    <button type="Submit">Search</button>
                </form>
                {!!lat && !!long ? (<WeatherDisplay lat={lat} long={long} />): null}

            </div>
        );
    }
}

export default ZipForm;



