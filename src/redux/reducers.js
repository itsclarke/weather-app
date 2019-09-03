import { combineReducers } from "redux";
import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  UPDATE_ORDER,
  SEARCH_ERROR,
  SELECT_DAY,
  SEARCH_SUCCESS
} from "./actions";

function locations(state = [], action) {
  switch (action.type) {
    case ADD_LOCATION:
      const found = state.find(
        location => location.zip === action.location.zip
      );
      if (!found) {
        return [...state, { ...action.location }];
      }
      return state;
    case REMOVE_LOCATION:
      return state.filter(location => location.key !== action.key);
    case UPDATE_ORDER:
      return [...action.locations];
    default:
      return state;
  }
}

function search(state = {}, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, error: action.error };
    case SEARCH_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function selectDay(state = {}, action) {
  switch (action.type) {
    case SELECT_DAY:
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
  selectDay,
  search
});

export default rootReducer;
