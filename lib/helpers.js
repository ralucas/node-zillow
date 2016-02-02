var request = require('request'),
    Q       = require('q'),
    xml2js  = require('xml2js'),
    _       = require('lodash'),
    apiList = require('./api-list');

function flattenProps(obj) {
  return _.mapValues(obj, _.first);
}

module.exports = {

  /**
   * Helper function that handles the http request
   *
   * @param {string} url
   */
  httpRequest: function httpRequest(url) {
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
  },

  /**
   * Helper function that converts xml to json
   *
   * @param {xml} xml
   */
  toJson: function toJson(xml) {
    var deferred = Q.defer();
    xml2js.parseString(xml, function(err, result) {
      if (err) {
        deferred.reject(new Error(err));
      } else {
        deferred.resolve(result);
      }
    });
    return deferred.promise;
  },

  /**
   * Helper function that takes params hash and converts it into query string
   *
   * @param {object} params
   * @param {Number} id
   */
  toQueryString: function toQueryString(params, id) {
    var paramsString = '';
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        paramsString += '&' + key + '=' + encodeURIComponent(params[key]);
      }
    }
    return 'zws-id=' + id + paramsString;
  },

  /**
   * Helper function that checks for the required params
   *
   * @param {object} params
   * @param {array} reqParams -- required parameters
   */
  checkParams: function checkParams(params, reqParams) {
    if ( reqParams.length < 1 ) return;

    if ( (_.isEmpty(params) || !params) && (reqParams.length > 0) ){
      throw new Error('Missing parameters: ' + reqParams.join(', '));
    }

    var paramsKeys = _.keys(params);
  
    _.each(reqParams, function(reqParam) {
      if ( paramsKeys.indexOf(reqParam) === -1 ) {
        throw new Error('Missing parameter: ' + reqParam);
      }
    });
  },

  handleResponse: function handleResponse(res) {
    var resultTag = Object.keys(res)[0];
    var result = res[resultTag];
    var props = _.without(Object.keys(result), '$');
    return _.chain(props)
      .map(function(prop) {
        return result[prop][0];
      })
      .map(flattenProps)
      .map(function(obj, i) {
        return [props[i], obj];
      })
      .fromPairs()
      .value();
  },

  handleError: function handleError(err) {
    console.error('Node-Zillow error: ', err.stack);
    throw new Error(err);
  }

};
