import moment from "moment";
import * as helpers from "../../lib/helpers";

describe("Testing conditions to icons", () => {
  test("Sunny should return the sun icon", () => {
    const icon = helpers.mapConditionsToIcon("Sunny");
    expect(icon).toEqual("fas fa-sun");
  });

  test("Tornado should return the umbrella icon", () => {
    const icon = helpers.mapConditionsToIcon("Tornado");
    expect(icon).toEqual("fas umbrella-beach");
  });

  test("Empty conditions should return the umbrella icon", () => {
    const icon = helpers.mapConditionsToIcon("");
    expect(icon).toEqual("fas umbrella-beach");
  });
});

describe("Testing day of week", () => {
  test("Full date format returns just the day", () => {
    const day = moment("09/02/2019", "MM/DD/YYYY");
    expect(helpers.dayOfWeek(day)).toEqual("Monday");
  });

  test("Missing date returns a proper error message", () => {
    expect(helpers.dayOfWeek(undefined)).toThrow();
  });
});

describe("Testing url creation method", () => {
  test("Expect a valid url to be returned", () => {
    const zipCode = "80304";
    const day = moment("09/02/2019", "MM/DD/YYYY");
    const result = helpers.createUrl(zipCode, day);
    expect(result).toEqual("/80304/monday");
  });
});
