import React from "react";
import { mapConditionsToIcon, dayOfWeek } from "../lib/helpers";

const Day = props => {
  const { Date, Temperature, Day } = props.day;
  const { IconPhrase } = Day;
  return (
    <div>
      <p>{dayOfWeek(Date)}</p>
      <p>
        <i className="fas fa-temperature-high"></i> {Temperature.Maximum.Value}
      </p>
      <p>
        <i className="fas fa-temperature-low"></i> {Temperature.Minimum.Value}
      </p>
      <p>
        <i className={mapConditionsToIcon(IconPhrase)}></i>
      </p>
    </div>
  );
};

export default Day;
