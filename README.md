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

```js
Needs to be resolved from a promise (recommend Q library):

var getResult = getDeepSearchResults({params});
getResult.then(function(result) {
  return result; //here's your result, so you can do something here
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Richard Lucas. Licensed under the MIT license.
