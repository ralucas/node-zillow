var request = require('request'),
    Q       = require('q'),
    xml2js  = require('xml2js'),
    _       = require('lodash');

module.exports = {

  /**
   * Helper function that handles the http request
   *
   * @param {string} url
   */
  httprequest: function(url) {
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
  toJson: function(xml) {
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
  toQueryString: function(params, id) {
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
  checkParams: function(params, reqParams) {
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
  }

};
