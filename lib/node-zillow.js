/**
 * node-zillow
 * http://github.com/ralucas/node-zillow
 *
 * Copyright (c) 2014 Richard Lucas
 * Licensed under the MIT license.
 */

'use strict';

var helpers = require('./helpers'),
    apiList = require('./api-list');

var rootUrl = 'http://www.zillow.com/webservice/';

/**
 * @class Zillow
 *
 * @param {string} id - your zillow api id
 */
function Zillow(id) {
    this.id = id;
}

/**
 * Carries out the getDeepSearchResults api call
 * @memberof Zillow
 *
 * @param {object} params - hash that takes address parameters
 */
Zillow.prototype.getDeepSearchResults = function(params) {
  var citystatezip = params.city + ', ' + params.state + ' ' + params.zip;

  var requestUrl = rootUrl + 'GetDeepSearchResults.htm?' +
    'zws-id=' + this.id + '&address=' + encodeURIComponent(params.address) +
    '&citystatezip=' + encodeURIComponent(citystatezip) +
    (params.rentzestimate ? params.rentzestimate: '');

  return helpers.httprequest(requestUrl)
    .then(helpers.toJson)
    .then(function(results) {
      var result = results['SearchResults:searchresults'];
      return result;
    });
};

/**
 * Carries out the getUpdatedPropertyDetails api call
 * @memberof Zillow
 *
 * @param {number} zpid = Zillow property id (can be a string or number)
 */
Zillow.prototype.getUpdatedPropertyDetails = function(zpid) {
  var requestUrl = rootUrl + 'GetUpdatedPropertyDetails.htm?' +
    'zws-id=' + this.id +
    '&zpid=' + zpid;

  return helpers.httprequest(requestUrl)
    .then(helpers.toJson)
    .then(function(results) {
      var result = results['UpdatedPropertyDetails:updatedPropertyDetails'];
        return result;
  });
};

/**
 * Carries out the getDemographics api call
 * @memberof Zillow
 *
 * @param {object} params - hash that takes address parameters
 */
Zillow.prototype.getDemographics = function(params) {
  var paramsString = helpers.toQueryString(params, this.id);

  var requestUrl = rootUrl + 'GetDemographics.htm?' + paramsString;
  
  return helpers.httprequest(requestUrl)
    .then(helpers.toJson)
    .then(function(results) {
      var result = results['Demographics:demographics'];
      return result;
    });
};

/**
 * Convenience method to make any Zillow Api call
 * @memberof Zillow
 *
 * @param {string} name of the api -- refer to the zillow api doc or the api_list.json
 * @param {object} params - object that takes parameters for call
 */
Zillow.prototype.callApi = function(apiName, params) {
  if (!this.id) throw new Error('Missing the zws-id');

  helpers.checkParams(params, apiList[apiName]['requiredParams']);

  var paramsString = helpers.toQueryString(params, this.id);

  var requestUrl = rootUrl + apiName + '.htm?' + paramsString;

  var resultTag = apiList[apiName]['resultTag'];

  return helpers.httprequest(requestUrl)
    .then(helpers.toJson)
    .then(function(results) {
      var result = results[resultTag];
      return result;
    });
};

module.exports = Zillow;
