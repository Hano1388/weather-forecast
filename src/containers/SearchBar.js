import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: ''};
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    // Todo: fetch weather data
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render(){
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="your favourite cities forecast"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

// const function mapStateToProps(state) {
//   return state;
// }

export default connect(null,
  { fetchWeather }
)(SearchBar);
