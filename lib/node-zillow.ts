import {
  RequestParams,
  checkParams,
  toQueryString,
  httpRequest,
  toJson,
  handleResponse,
  handleError
} from "./helpers";
import apiList from "./api-list";

/**
 * node-zillow
 * http://github.com/ralucas/node-zillow
 *
 * Copyright (c) 2014 Richard Lucas
 * Licensed under the MIT license.
 */

import objectAssign from "object-assign";

/**
 * @class Zillow
 *
 * @param {string} id - your zillow api id
 * @param {object} options - options for additional settings
 */
class Zillow {
  id?: string;
  options?: RequestParams;
  constructor(id: string, options?: RequestParams) {
    this.id = id;
    this.options = objectAssign(
      {
        https: false,
        timeout: 15000
      },
      options
    );
  }

  /**
   * Get method to make any 'GET' Zillow Api call
   * @memberof Zillow
   *
   * @param {string} name of the api -- refer to the zillow api doc or the api-list.js
   * @param {object} params - object that takes parameters for call
   */
  get(name: string, params?: RequestParams) {
    if (!this.id) {
      throw new Error("Missing the zws-id");
    }

    checkParams(params, apiList(name).requiredParams);

    const paramsString = toQueryString(params, this.id);
    const protocol = this.options.https ? "https" : "http";
    const requestUrl = `${protocol}://www.zillow.com/webservice/${name}.htm?${paramsString}`;

    return httpRequest(requestUrl, this.options.timeout)
      .then(toJson)
      .then(handleResponse)
      .catch(handleError);
  }
}

export default Zillow;
