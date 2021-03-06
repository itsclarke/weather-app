import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class Details extends Component {
  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    const { city, state, zip, day } = this.props.details;
    return (
      <div>
        <button className="btn" onClick={() => this.handleClick()}>
          Return
        </button>
        <h3>
          {city}, {state} {zip}
        </h3>
        <h4>Details for {moment(day.Date).format("dddd, MMMM Do YYYY")}</h4>
        <p>High: {day.Temperature.Maximum.Value}</p>
        <p>Low: {day.Temperature.Minimum.Value}</p>
        <p>Today: {day.Day.IconPhrase}</p>
        <p>Tonight: {day.Night.IconPhrase}</p>
        <p>
          <a href={day.Link} target="_blank" rel="noopener noreferrer">
            More info
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { details: state.selectDay };
};

export default connect(mapStateToProps)(Details);
