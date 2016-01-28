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

var ROOT_URL = 'http://www.zillow.com/webservice/';

/**
 * @class Zillow
 *
 * @param {string} id - your zillow api id
 */
function Zillow(id) {
    this.id = id;
}

/**
 * Get method to make any 'GET' Zillow Api call
 * @memberof Zillow
 *
 * @param {string} name of the api -- refer to the zillow api doc or the api-list.js
 * @param {object} params - object that takes parameters for call
 */
Zillow.prototype.get = function(apiName, params) {
  if (!this.id) throw new Error('Missing the zws-id');

  helpers.checkParams(params, apiList[apiName]['requiredParams']);

  var paramsString = helpers.toQueryString(params, this.id);

  var requestUrl = ROOT_URL + apiName + '.htm?' + paramsString;

  return helpers.httpRequest(requestUrl)
    .then(helpers.toJson)
    .then(helpers.handleResponse)
    .catch(helpers.handleError);
};

module.exports = Zillow;

