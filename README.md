#Express React Departures
Simple 3 page web application using node, webpack, react and redux to display train services departing from a selected station, using Trainline Realtime API.

##Features:

 - Responsive layout
 - Autocomplete to select departure station
 - Automatically update departures in realtime
 - Automatically update train in progress

##Project Structure

**Server**

	modules/
	├── common
	│   ├── api-parser.js
	│   ├── operators.js
	│   └── stations.js
	├── departures
	│   ├── handler.js
	│   └── index.js
	└── services
	    ├── handler.js
	    └── index.js


Each module has a route definition and a custom handler for that route. In the common module are the api parser, the train stations, and train operators.

**Client**

	src
	├── index.js
	├── index.test.js
	├── configureStore.js
	├── actions/
	├── components/
	│   ├── DepartureSelect/
	│   ├── Error/
	│   ├── Header/
	│   ├── ServiceDetails/
	│   ├── TrainServices/
	│   └── Wrapper/
	├── constants
	├── containers
	├── middlewares
	├── reducers
	└── router


##Install

**Express server dependencies**

`npm install`

**Client-side dependencies (React, Redux, Webpack, Babel, ESLint, etc):**

`cd client && npm install`

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Express Generator](https://expressjs.com/en/starter/generator.html). If there is any missing dependency or you have any error, try to solve it running [yarn](https://yarnpkg.com/en/docs/install).

##Available scripts:

#### `npm start`

The project is using `concurrently` to run both `express` and `webpack-dev-server` in the same console. Be sure you are in the root of the project before running this command, otherwise will only run the client side and the API requests won't work.

You should see the app up and running at `http://localhost:3000`

#### `npm test`

For testing the project uses [Jest](https://facebook.github.io/jest/) as its test runner, and [Enzyme](http://airbnb.io/enzyme/) to better traverse the components output. 

When you run npm test, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests. If you want to run all the test, just press `a`. More details [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

#### `npm run server`

Will only run express server on port 3001.

#### `npm run client`

Will only run `webpack-dev-server` on port 3000.

-----------------

###Pending:
 - Add tests on server side
 - Integrate [React Helmet](https://github.com/nfl/react-helmet) to manage the document head (title, meta, canonical)
 - Transition between routes
 - Integration with [React Bootstrap](https://react-bootstrap.github.io/)

###Notes:
 - Express is a middleware between `https://realtime.thetrainline.com/departures/` endpoint and the client side.
 - The project is proxying API requests to `http://localhost:3001` where express is running. Webpack web server provide an option for that in `package.json`. More in [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)

