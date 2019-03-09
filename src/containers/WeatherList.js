import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
  renderWeather(cityData) {
    const { id, name } = cityData.city;
    const temperatures = cityData.list.map(
      temperature => temperature.main.temp
    );
    console.log(temperatures);
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Chart data={temperatures} color="orange" />
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
  console.log(weather);
  return { weather }
}
export default connect(mapStateToProps)(WeatherList);
