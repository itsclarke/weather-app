import { zipLookup, fiveDayForecast } from "../../services";
export const ADD_LOCATION = "ADD_LOCATION";
export const ADD_LOCATION_ERROR = "ADD_LOCATION_ERROR";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const SELECT_DAY = "SELECT_DAY";

export const addLocation = zip => {
  return (dispatch, getState) => {
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
        dispatch({ type: ADD_LOCATION, location });
      })
      .catch(err => {
        const error = "Invalid";
        dispatch({ type: ADD_LOCATION_ERROR, error });
      });
  };
};

export const removeLocation = key => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_LOCATION, key });
  };
};

export const selectDay = (location, day) => {
  return (dispatch, getState) => {
    dispatch({ type: SELECT_DAY, location, day });
  };
};
