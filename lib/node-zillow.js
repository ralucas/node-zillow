/**
 * node-zillow
 * http://github.com/ralucas/node-zillow
 *
 * Copyright (c) 2014 Richard Lucas
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request'),
    Q       = require('q'),
    xml2js  = require('xml2js'),
    apiList = require('./api_list.json');

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
 * Helper function that handles the http request
 *
 * @param {string} url
 */
function httprequest(url) {
  var deferred = Q.defer();
  request(url, function(err, response, body) {
    if (err) {
      deferred.reject(new Error(err));
    } else if (!err && response.statusCode !== 200) {
      deferred.reject(new Error(response.statusCode));
    } else {
      deferred.resolve(body);
    }
  });
  return deferred.promise;
}

/**
 * Helper function that converts xml to json
 *
 * @param {xml} xml
 */
function toJson(xml) {
  var deferred = Q.defer();
  xml2js.parseString(xml, function(err, result) {
    if (err) {
      deferred.reject(new Error(err));
    } else {
      deferred.resolve(result);
    }
  });
  return deferred.promise;
}

/**
 * Helper function that takes params hash and converts it into query string
 *
 * @param {object} params
 */
function toQueryString(params) {
  var paramsString = '';
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      paramsString += '&' + key + '=' + encodeURIComponent(params[key]);
    }
  }
  return 'zws-id=' + this.id + paramsString;
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

  return httprequest(requestUrl)
    .then(toJson)
    .then(function(results) {          
      var result = results['SearchResults:searchresults'];
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
  var paramsString = toQueryString(params);

  var requestUrl = rootUrl + 'GetDemographics.htm?' + paramsString;

  return httprequest(requestUrl)
    .then(toJson)
    .then(function(results) {
      var result = results['Demographics:demographics'];
      return result;
    });
};

Zillow.prototype.callApi = function(apiName, params) {
  var paramsString = toQueryString(params);

  var requestUrl = rootUrl + apiName + '.htm?' + paramsString;

  var resultTag = apiList[apiName]['resultTag'];

  return httprequest(requestUrl)
    .then(toJson)
    .then(function(results) {
      var result = results[resultTag];
      return result;
    });
};

module.exports = Zillow;
