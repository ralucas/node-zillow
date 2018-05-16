# node-zillow [![Build Status](https://secure.travis-ci.org/ralucas/node-zillow.png?branch=master)](http://travis-ci.org/ralucas/node-zillow) [![Coverage Status](https://coveralls.io/repos/github/ralucas/node-zillow/badge.svg)](https://coveralls.io/github/ralucas/node-zillow)

Node wrapper for the Zillow API

## Getting Started
Install the module with: `npm install node-zillow`

```js
var Zillow = require('node-zillow');

//Instantiate
var zillow = new Zillow('your zws-id', options);
```
`var your-zws-id = process.env.ZWSID` is the recommended way

#### Accepted options
https - default is `false`

__None of this will make sense without reading the [Zillow API Docs](http://www.zillow.com/howto/api/APIOverview.htm)__

__Also be sure to follow the Zillow API [terms of use](http://www.zillow.com/howto/api/APITerms.htm) and [branding requirements](http://www.zillow.com/howto/api/BrandingRequirements.htm)__

## Documentation

### Methods

`get`
- Method for the entire zillow api
- takes the name of the api call (i.e. GetSearchResults) -- refer to the [Zillow API Docs](http://www.zillow.com/howto/api/APIOverview.htm), the `lib/api-list.js`, or see below
- Returns a promise with the result
- The eventual returned result is an object with the following properties: `message`, `request`, and sometimes `response`
- Please Note: `response` property is NOT always included in the zillow api response

#### Following API Methods supported:
* GetDeepSearchResults
* GetUpdatedPropertyDetails
* GetDeepComps
* GetRateSummary
* GetMonthlyPayments
* GetDemographics
* GetRegionChildren
* GetRegionChart
* GetSearchResults
* GetZestimate
* GetChart
* GetComps

## Examples

Example of all API calls through the `get()` method can be found in [examples](https://github.com/ralucas/node-zillow/blob/master/examples/examples.js)

```js
var Zillow  = require('node-zillow')

var zwsid = process.env.ZWSID
var zillow = new Zillow(zwsid)

var parameters = {
  zpid: 1111111
};

zillow.get('GetZestimate', parameters)
  .then(function(results) {
    return results;
    // results here is an object { message: {}, request: {}, response: {}} 
  })
```

The following API calls are deprecated and will be removed in the 1.0.0 release. Using `get()` is the recommended approach and should be able to do everthing that the legacy functions do. If you see problems with `get()`, PR's and issues are welcome.

```js
Zillow.callApi()
Zillow.getDeepSearchResults()
Zillow.getUpdatedPropertyDetails()
Zillow.getDemographics()
```

## Contributing
This module uses promises via the Q library.  Please continue to use promises. And in lieu of any further formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using npm scripts in the `package.json`.

## Contributors

* [Jeff Friesen](https://github.com/jefffriesen)
* [Richard Lucas](https://github.com/ralucas)

## Release History
* v1.1.0 - Updated all dependencies, removed grunt, moved to istanbul, added coveralls, more ci environments
* v1.0.1 - Added protocol option
* v1.0.0 - Created single method (get), updated response handling, removed all deprecated methods, updated tests
* v0.0.5 - updates
* v0.0.4 - Added error-checking and parameter checking
* v0.0.3 - Includes the following methods: callApi, getUpdatedPropertyDetails, getDeepSearchResults, getDemographics

## License
Copyright (c) 2014-2018 Richard Lucas. Licensed under the MIT license.
