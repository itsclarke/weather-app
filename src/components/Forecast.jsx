import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addLocation, updateOrder } from "../redux/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import LocationRow from "./LocationRow";

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
`;

const Results = styled.div``;

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: "",
      error: null
    };
  }

  handleChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.addLocation(this.state.zipCode);
    this.setState({ zipCode: "" });
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.dropabbleId === source.dropabbleId &&
      destination.index === source.index
    ) {
      return;
    }

    const newOrder = Array.from(this.props.locations);
    const dragged = this.props.locations.find(
      location => location.zip === draggableId
    );
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, dragged);
    this.props.updateOrder(newOrder);
  };

  render() {
    const { locations, search } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="ZIP Code"
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
          {!search.error && locations.length === 0 ? (
            <div>Please enter a valid zip code to begin.</div>
          ) : null}
          {search.error ? <div className="error">{search.error}</div> : null}
        </form>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId={"zips"}>
            {provided => (
              <Results ref={provided.innerRef} {...provided.droppableProps}>
                {locations.length > 0
                  ? locations.map((location, index) => {
                      return (
                        <LocationRow
                          location={location}
                          key={location.zip}
                          index={index}
                        />
                      );
                    })
                  : null}
                {provided.placeholder}
              </Results>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations,
    search: state.search
  };
};

const mapDisptachToProps = dispatch => {
  return {
    addLocation: input => dispatch(addLocation(input)),
    updateOrder: input => dispatch(updateOrder(input))
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Forecast);
