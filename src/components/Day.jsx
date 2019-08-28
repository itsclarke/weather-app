import React from "react";
import moment from "moment";

const icon = phrase => {
  let icon = "";
  switch (phrase) {
    case "Sunny":
    case "Mostly sunny":
    case "Partly sunny":
      icon = "fas fa-sun";
      break;
    case "Partly sunny w/ t-storms":
    case "Partly sunny w/ showers":
      icon = "fas fa-cloud-sun-rain";
      break;
    case "Intermittent clouds":
      icon = "fas fa-cloud-sun";
      break;
    case "Mostly cloudy":
      icon = "fas fa-cloud";
      break;
    default:
      icon = "fas umbrella-beach";
      break;
  }
  return icon;
};

const Day = props => {
  const { Date, Temperature, Day } = props.day;
  const { IconPhrase } = Day;
  return (
    <div>
      <p>{moment(Date).format("dddd")}</p>
      <p>
        <i className="fas fa-temperature-high"></i> {Temperature.Maximum.Value}
      </p>
      <p>
        <i className="fas fa-temperature-low"></i> {Temperature.Minimum.Value}
      </p>
      <p>
        <i className={icon(IconPhrase)}></i>
      </p>
    </div>
  );
};

export default Day;
