import request from "request";
import q from "q";
import xml2js from "xml2js";
import { mapValues, first, isEmpty, keys, each, without, chain } from "lodash";

function flattenProps(obj) {
  return mapValues(obj, first);
}

export interface RequestParams {
  [key: string]: any;
}

/**
 * Helper function that handles the http request
 *
 * @param {string} url
 */
export function httpRequest(url) {
  const deferred = q.defer();
  request(url, (err, response, body) => {
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
export function toJson(xml: string) {
  const deferred = q.defer();
  xml2js.parseString(xml, (err, result) => {
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
 * @param {Number} id
 */
export function toQueryString(
  params: RequestParams,
  id: number | string
): string {
  let paramsString = `zws-id=${id}`;
  for (const [key, value] of Object.entries(params)) {
    paramsString += `&${key}=${encodeURIComponent(params[key])}`;
  }
  return paramsString;
}

/**
 * Helper function that checks for the required params
 *
 * @param {object} params
 * @param {array} requiredParameters -- required parameters
 */
export function checkParams(
  params: RequestParams,
  requiredParameters: string[]
) {
  if (!requiredParameters || requiredParameters.length < 1) {
    return;
  }

  if ((isEmpty(params) || !params) && requiredParameters.length > 0) {
    throw new Error(`Missing parameters: ${requiredParameters.join(", ")}`);
  }

  const paramsKeys = keys(params);

  each(requiredParameters, reqParam => {
    if (paramsKeys.indexOf(reqParam) === -1) {
      throw new Error(`Missing parameter: ${reqParam}`);
    }
  });
}

export function handleResponse(res) {
  const resultTag = Object.keys(res)[0];
  const result = res[resultTag];
  const props = without(Object.keys(result), "$");
  return chain(props)
    .map(prop => {
      return result[prop][0];
    })
    .map(flattenProps)
    .map((obj, i) => {
      return [props[i], obj];
    })
    .fromPairs()
    .value();
}

export function handleError(err) {
  console.error("Node-Zillow error: ", err.stack);
  throw new Error(err);
}
