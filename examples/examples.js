// Call with ZWSID=<ZWSID> node examples.js GetZestimate
var Zillow   = require('../lib/node-zillow')
var _        = require('lodash')
var params   = require('./parameters')
var apiNames = _.keys(require('../lib/api-list'))
var inspect  = require('eyes').inspector({maxLength: 50000})

// Make sure we have specified the correct API name in the arguments
var apiName = process.argv[2]
if (!_.contains(apiNames, apiName)) throw new Error('requires apiName: \n' + apiNames.join(', '))


// Instantiate a zillow object by passing in our own custom Zillow id (zswid):
var zwsid = process.env.ZWSID
var zillow = new Zillow(zwsid)


// Call parameters based on which API we are calling
var parameters = (function() {
  switch (apiName) {
    case 'GetDeepSearchResults':      return params.addressWithupdates;
    case 'GetUpdatedPropertyDetails': return params.zpidWithUpdates;
    case 'GetDeepComps':              return _.extend(params.zpidWithComps, {count: 5});
    case 'GetRateSummary':            return {state: 'CO'};
    case 'GetMonthlyPayments':        return {price: 200000};
    case 'GetDemographics':           return params.zip;
    case 'GetRegionChildren':         return {state: 'CO'};
    case 'GetRegionChart':            return params.chart;
    case 'GetSearchResults':          return params.addressWithupdates;
    case 'GetZestimate':              return params.zpidWithZestimate;
    case 'GetChart':                  return _.extend(params.chart, params.zpidWithZestimate);
    case 'GetComps':                  return _.extend(params.zpidWithComps, {count: 5});
    default:
      throw new Error();
  }
})()


// Call the primary API function based on the arguments passed in
var example = zillow.get(apiName, parameters)

example.then(function(data) {
    inspect(data)
    return data;
  })


