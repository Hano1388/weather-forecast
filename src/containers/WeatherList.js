import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends Component {
  renderWeather(cityData) {
    const { id, name } = cityData.city;
    const temperatures = cityData.list.map(
      weather => weather.main.temp
    );
    const pressures = cityData.list.map(
      weather => weather.main.pressure
    );
    const humidities = cityData.list.map(
      weather => weather.main.humidity
    );

    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temperatures} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    )
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

const mapStateToProps = ({ weather }) => {
  return { weather }
}
export default connect(mapStateToProps)(WeatherList);
