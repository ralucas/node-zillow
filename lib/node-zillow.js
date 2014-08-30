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
    xml2js  = require('xml2js');

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
 * wrapping the request in a promise
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
 * wrapping the xml conversion in a promise
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
      paramsString += '&' + key + '=' + params[key];
    }
  }
  return paramsString;
}

/**
 * Carries out the getDeepSearchResults api call
 * @memberof Zillow
 *
 * @param {object} params - hash that takes address parameters
 */
Zillow.prototype.getDeepSearchResults = function(params, callback) {
  var citystatezip = params.city + ', ' + params.state + ' ' + params.zip;

  var requestUrl = rootUrl + 'GetDeepSearchResults.htm?' +
    'zws-id=' + this.id + '&address=' + encodeURIComponent(params.address) +
    '&citystatezip=' + encodeURIComponent(citystatezip) + 
    (params.rentzestimate ? params.rentzestimate: '');

  httprequest(requestUrl)
    .then(toJson)
    .done(function(results) {          
      var result = results['SearchResults:searchresults']['$'];
      return callback && callback(null, result);
    }).fail(function(err) {
      return callback && callback(err);
    });
};

/**
 * Carries out the getDemographics api call
 * @memberof Zillow
 *
 * @param {object} params - hash that takes address parameters
 */
Zillow.prototype.getDemographics = function(params, callback) {
  var paramsString = toQueryString(params);

  var requestUrl = rootUrl + 'zws-id=' + this.id + 
    'GetDemographics.htm?' + paramsString;

  return httprequest(requestUrl)
    .then(toJson)
    .done(function(results) {
      var result = results['Demographics:demographics'];
      return callback && callback(null, result);
    }).fail(function(err) {
      return callback && callback(err);
    });
};

module.exports = Zillow;
