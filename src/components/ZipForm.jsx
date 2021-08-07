import { Component } from "react";
import WeatherDisplay from './WeatherDisplay';

class ZipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            lat: '',
            long: '',
            address: ''
        }
    }

    _handleChange = (field, val) => {
        this.setState({
            [field]: val,
        });
    };

    _handleSubmit = async (e) => {
        e.preventDefault();

        const google_key = process.env.REACT_APP_GOOGLE_KEY

        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.zip}&key=${google_key}`;
        const response = await fetch(url).then(response => response.json());

        //console.log("zip_response: ", response);
        const newLat = response.results[0].geometry.location.lat;
        const newLong = response.results[0].geometry.location.lng;
        const newAddress = response.results[0].formatted_address;

        this.setState({
            lat: newLat,
            long: newLong,
            address: newAddress
        });
/*         console.log("Lat: ", this.state.lat);
        console.log("Long: ", this.state.long); */

        
    }

    render() {
        const { lat, long, address } = this.state;

        return (
            <div className="ZipSearch">
                <form onSubmit={this._handleSubmit}>
                    <input type="text" value={this.state.zip} onChange={(e) => {
                            this._handleChange('zip', e.target.value)
                        }}/>
                    <button type="Submit">Search</button>
                </form>
                {!!lat && !!long ? (<WeatherDisplay lat={lat} long={long} address={address} />) : null}

            </div>
        );
    }
}

export default ZipForm;



