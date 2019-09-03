## Weather App

### React/Redux

After cloning the repo, change into the directory

- Run `npm install` to install the dependendies
- Run `npm run start` to start the application at `http://localhost:3000`
- Run `npm run test` to run unit tests

Once launched, you will be presented with an input field that takes zip codes. Adding a valid zip code will create a new 5 day forecast for that location. Clicking on any of the days will take you to a detail page about that day. Simply click the `go back` button to return to the fulll forecast screen.

You may add as many locations as you want.

You may also reorder your locations by dragging the appropriate row.

Weather information provided by [AccuWeather](http://accuweather.com).

_Todos_

- Add additional unit testing
- Make Details page pretty
- Add 5 minute refresh (this seems odd)
