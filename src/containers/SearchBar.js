import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: ''};
  }

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }

  render(){
    return (
      <form className="input-group">
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
