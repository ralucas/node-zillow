/*
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
    util    = require('util'),
    _       = require('lodash');

var rootUrl = 'http://www.zillow.com/webservice/';

function Zillow(id) {
    this.id = id;
}

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

Zillow.prototype.getDeepSearchResults = function(address, citystatezip, rentzestimate) {
    var requestUrl = rootUrl + 'GetDeepSearchResults.htm?' +
        'zws-id=' + this.id + '&address=' + encodeURIComponent(address) +
        '&citystatezip=' + encodeURIComponent(citystatezip) + 
        (rentzestimate ? rentzestimate: '');

    return httprequest(requestUrl)
        .then(toJson)
        .then(function(results) {
            var result = results['SearchResults:searchresults'];
            return result;
        });
};

module.exports = Zillow;
