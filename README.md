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
```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Richard Lucas. Licensed under the MIT license.
