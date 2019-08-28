import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Day from "./Day";
import { removeLocation, selectDay } from "../redux/actions";

class LocationRow extends Component {
  _selectDay = (location, day) => {
    this.props.selectDay(location, day);
  };

  _removeLocation = key => {
    this.props.removeLocation(key);
  };

  _handleClick = (location, day) => {
    this.props.selectDay(location, day);
  };

  render() {
    const { city, state, fiveDay, key, zip } = this.props.location;
    return (
      <div className="container" key={key}>
        <div className="flex header">
          <span className="location">
            {city}, {state}
          </span>
          <button className="btn" onClick={() => this._removeLocation(key)}>
            Remove
          </button>
        </div>

        <div className="flex">
          {fiveDay.map((day, i) => {
            const url = `/${zip}/${moment(day.Date)
              .format("dddd")
              .toLowerCase()}`;
            return (
              <Link
                to={url}
                key={day.EpochDate}
                className="box"
                onClick={() => this._handleClick(this.props.location, i)}
              >
                <Day day={day} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDisptachToProps = dispatch => {
  return {
    selectDay: (input, index) => dispatch(selectDay(input, index)),
    removeLocation: input => dispatch(removeLocation(input))
  };
};

export default connect(
  null,
  mapDisptachToProps
)(LocationRow);
