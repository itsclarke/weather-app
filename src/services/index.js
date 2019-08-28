import axios from "axios";
import { API_KEY } from "../config";

export const zipLookup = async zipCode => {
  return await axios
    .get("http://dataservice.accuweather.com/locations/v1/postalcodes/search", {
      params: {
        apikey: API_KEY,
        q: zipCode
      }
    })
    .then(res => res)
    .catch(err => err);
};

export const fiveDayForecast = async location => {
  return await axios
    .get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}`,
      {
        params: {
          apikey: API_KEY
        }
      }
    )
    .then(res => res)
    .catch(err => err);
};
