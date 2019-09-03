## Weather App

### React/Redux

After cloning the repo, change into the directory

- Run `npm install` to install the dependendies
- Run `npm run start` to start the application at [`http://localhost:3000`](http://localhost:3000)
- Run `npm run test` to run unit tests

Once launched, you will be presented with an input field that takes zip codes. Adding a valid zip code will create a new 5 day forecast for that location. Clicking on any of the days will take you to a detail page about that day. Simply click the `Return` button to return to the full forecast screen.

You may add as many locations as you want.

You may also reorder your locations by dragging the appropriate row.

Weather information provided by [AccuWeather](http://accuweather.com).

_Todos_

- ~~Error handling~~
- ~~Unit testing~~
- ~~[Allow location rows to be draggable](https://github.com/atlassian/react-beautiful-dnd)~~
- Component tests
- Make Details page pretty
- Add 5 minute refresh
- Uplift remaining components to [Styled Components](https://www.styled-components.com/)
