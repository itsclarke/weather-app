import React, { Component } from "react";
import { connect } from "react-redux";
import LocationRow from "./LocationRow";
import { addLocation } from "../redux/actions";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: "",
      error: null
    };
  }

  _handleChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  _handleSubmit = async e => {
    e.preventDefault();
    this.props.addLocation(this.state.zipCode);
    this.setState({ zipCode: "" });
  };

  render() {
    const { locations } = this.props;
    return (
      <div className="weather-app">
        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            placeholder="ZIP Code"
            value={this.state.zipCode}
            onChange={this._handleChange}
          />
        </form>
        {locations.error ? <p>That's an invalid zip code</p> : null}
        {locations.length > 0 && !locations.error ? (
          locations.map((location, i) => {
            return <LocationRow location={location} key={i} />;
          })
        ) : (
          <div>please enter a location</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { locations: state.locations };
};

const mapDisptachToProps = dispatch => {
  return { addLocation: input => dispatch(addLocation(input)) };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Forecast);
