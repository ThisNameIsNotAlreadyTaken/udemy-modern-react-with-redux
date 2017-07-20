import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={cityData.city.coord.lon} lat={cityData.city.coord.lat} />
                </td>
                <td>
                    <Chart data={cityData.list.map(item => item.main.temp)} color="orange" units="K" />               
                </td>
                <td>
                    <Chart data={cityData.list.map(item => item.main.pressure)} color="green" units="hPa" />               
                </td>
                <td>
                    <Chart data={cityData.list.map(item => item.main.humidity)} color="black" units="%" />               
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);