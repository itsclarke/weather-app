import moment from "moment";

export const mapConditionsToIcon = conditions => {
  let icon = "";
  switch (conditions) {
    case "Sunny":
    case "Mostly sunny":
    case "Partly sunny":
      icon = "fas fa-sun";
      break;
    case "Partly sunny w/ t-storms":
    case "Partly sunny w/ showers":
    case "Mostly cloudy w/ t-storms":
      icon = "fas fa-cloud-sun-rain";
      break;
    case "Intermittent clouds":
      icon = "fas fa-cloud-sun";
      break;
    case "Mostly cloudy":
    case "Cloudy":
    case "Dreary":
      icon = "fas fa-cloud";
      break;
    case "Thunderstorms":
    case "Rain":
    case "Showers":
      icon = "fas fa-cloud-showers-heavy";
      break;
    default:
      icon = "fas umbrella-beach";
      break;
  }
  return icon;
};

export const dayOfWeek = date => {
  return moment(date).format("dddd");
};

export const createUrl = (zip, day) => {
  return `/${zip}/${moment(day)
    .format("dddd")
    .toLowerCase()}`;
};
