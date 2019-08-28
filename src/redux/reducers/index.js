import { combineReducers } from "redux";
import {
  ADD_LOCATION,
  //   ADD_LOCATION_ERROR,
  REMOVE_LOCATION,
  SELECT_DAY
} from "../actions";

function locations(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      return [...state, { ...action.location }];
    // case ADD_LOCATION_ERROR:
    //   return { ...state, error: action.error };
    case REMOVE_LOCATION:
      return state.filter(location => location.key !== action.key);
    default:
      return state;
  }
}

function selectDay(state = {}, action) {
  switch (action.type) {
    case SELECT_DAY:
      // can't destructure because state and location.state conflict
      const location = {
        city: action.location.city,
        state: action.location.state,
        zip: action.location.zip,
        day: action.location.fiveDay[action.day]
      };
      return location;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  locations,
  selectDay
});

export default rootReducer;
