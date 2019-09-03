import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { removeLocation, selectDay } from "../redux/actions";
import { createUrl } from "../lib/helpers";
import Day from "./Day";

const Container = styled.div`
  border: solid 1px grey;
  margin-bottom: 10px;
  border-radius: 5px;
  background: white;
`;

class LocationRow extends Component {
  selectDay = (location, day) => {
    this.props.selectDay(location, day);
  };

  removeLocation = key => {
    this.props.removeLocation(key);
  };

  handleClick = (location, day) => {
    this.props.selectDay(location, day);
  };

  render() {
    const { city, state, fiveDay, key, zip } = this.props.location;
    const { index } = this.props;
    return (
      <Draggable draggableId={zip} index={index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="flex header">
              <span className="location">
                {city}, {state}
              </span>
              <button className="btn" onClick={() => this.removeLocation(key)}>
                Remove
              </button>
            </div>

            <div className="flex">
              {fiveDay.map((day, i) => {
                return (
                  <Link
                    to={createUrl(zip, day.Date)}
                    key={day.EpochDate}
                    className="box"
                    onClick={() => this.handleClick(this.props.location, i)}
                  >
                    <Day day={day} />
                  </Link>
                );
              })}
            </div>
          </Container>
        )}
      </Draggable>
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
