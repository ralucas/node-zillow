# node-zillow [![Build Status](https://secure.travis-ci.org/ralucas/node-zillow.png?branch=master)](http://travis-ci.org/ralucas/node-zillow)

Node wrapper for the Zillow API

## Getting Started
Install the module with: `npm install node-zillow`

```javascript
var Zillow = require('node-zillow');

//Instantiate
var zillow = new Zillow('your zws-id');
```

## Documentation

### Methods

```js
callApi
- Convenience method for the entire zillow api
- takes the name of the api call (i.e. GetSearchResults) -- refer to the [Zillow API Docs](http://www.zillow.com/howto/api/APIOverview.htm) or the `lib/api_list.json`
- Returns a promise with the result
```

```js
getDeepSearchResults
- takes params hash
{
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zip',
  rentzestimate: boolean //this is optional
}
- Returns a promise with the result
```

```js
getUpdatedPropertyDetails
- takes zpid (Zillow property id) obtained from the getDeepSearchResults request
Pass in as a number or a string

- Returns a promise with the result
```

```js
getDemographics
- takes params hash
{
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zip'
}
- Returns a promise with the result
```

## Examples

Zillow.getDeepSearchResults()

```js
Needs to be resolved from a promise (recommend Q library):

var getResult = getDeepSearchResults({params});
getResult.then(function(result) {
  return result; //here's your result, so you can do something here
});
```

Zillow.getUpdatedPropertyDetails()

```js
var Zillow  = require('node-zillow')

// To run: `ZWSID=<ZWSID> node example_updatedPropertyDetails.js`
var zwsid = process.env.ZWSID;

var zillow = new Zillow(zwsid)

var params = {
  address: "2512 Mapleton Ave.",
  city: 'Boulder',
  state: 'CO',
  zip: '80304'
}

// getDeepSearchResults() returns zpid, which is passed into getUpdatedPropertyDetails()
var deepResults = zillow.getDeepSearchResults(params)
    .then(function(result) {
      var zpid = result.response[0].results[0].result[0].zpid[0]
      return zillow.getUpdatedPropertyDetails(zpid)
    })
    .then(function(result) {
      if (result.message[0].code === '502') return {}
      return result.response[0]
    })

```

Zillow.getDemographics()

```js
var Zillow  = require('node-zillow')

var zwsid = process.env.ZWSID
var zillow = new Zillow(zwsid)

zillow.getDemographics({zip: '80301'})
  .then(function(data) {
    var results = data.response[0].results[0].result[0]
    return results;
  })
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Richard Lucas. Licensed under the MIT license.
