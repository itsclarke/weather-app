import { zipLookup, fiveDayForecast } from "../lib/services";
export const ADD_LOCATION = "ADD_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SELECT_DAY = "SELECT_DAY";

export const addLocation = zip => {
  return (dispatch, getState) => {
    const state = getState();
    const exists = state.locations.find(location => location.zip === zip);

    if (exists) {
      const error = "Location already exists.";
      dispatch({ type: SEARCH_ERROR, error });
      return;
    }

    let location = {};
    zipLookup(zip)
      .then(res => {
        const data = res.data[0];
        const city = data.ParentCity.LocalizedName;
        const state = data.AdministrativeArea.LocalizedName;
        const zip = data.PrimaryPostalCode;
        const key = data.Key;
        location = { city, state, zip, key };
        return location;
      })
      .then(zipInfo => {
        return fiveDayForecast(zipInfo.key);
      })
      .then(fiveDay => {
        fiveDay = fiveDay.data.DailyForecasts;
        location = { ...location, fiveDay };
        // is this kosher?
        dispatch({ type: SEARCH_SUCCESS, error: null });
        dispatch({ type: ADD_LOCATION, location });
      })
      .catch(err => {
        const error = "Please enter a valid zip code.";
        dispatch({ type: SEARCH_ERROR, error });
      });
  };
};

export const removeLocation = key => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_LOCATION, key });
  };
};

export const updateOrder = locations => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_ORDER, locations });
  };
};

export const selectDay = (location, day) => {
  return (dispatch, getState) => {
    dispatch({ type: SELECT_DAY, location, day });
  };
};
