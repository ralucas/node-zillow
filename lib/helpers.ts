import request from "request";
import q from "q";
import xml2js from "xml2js";
import "core-js/es7/object";
import { DOMParser } from "xmldom";
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
export function httpRequest(url: string, timeout?: number) {
  const deferred = q.defer();
  request(url, { timeout }, (err, response, body) => {
    if (err) {
      deferred.reject(new Error(err));
    } else if (!err && response.statusCode !== 200) {
      deferred.reject(new Error(response.statusMessage));
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
  try {
    // parse xml with domparser first to ensure no weird char sequences slip through
    // https://stackoverflow.com/questions/24877085/invalid-character-entity-parsing-xml
    // also, turn off warnings/errors being logged.
    const xmlStringSerialized = new DOMParser({
      errorHandler: { warning: () => {}, error: () => {} }
    }).parseFromString(xml, "text/xml");
    xml2js.parseString(xmlStringSerialized, (err, result) => {
      if (err) {
        deferred.reject(new Error(err));
      } else {
        deferred.resolve(result);
      }
    });
  } catch (err) {
    deferred.reject(err);
  }
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
