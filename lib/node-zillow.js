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
    xml2js  = require('xml2js');

var rootUrl = 'http://www.zillow.com/webservice/';

function Zillow(id) {
    this.id = id;
}

Zillow.prototype.getDeepSearchResults = function(address, citystatezip, rentzestimate) {
    var deferred = Q.defer();
    var requestUrl = rootUrl + 'GetDeepSearchResults.htm?' +
        'zws-id=' + this.id + '&address=' + encodeURIComponent(address) +
        '&citystatezip=' + encodeURIComponent(citystatezip) + 
        (rentzestimate ? rentzestimate: '');

    request(requestUrl, function(err, response, body) {
        if (err) {
            deferred.reject(new Error(err));
        } else if (!err && response.statusCode !== 200) {
            console.error(new Error(response.statusCode));
        } else {
            deferred.resolve(body);
        }
    });
    return deferred.promise;
};
