'use strict';

var Zillow         = require('../lib/node-zillow.js'),
    mocha          = require('mocha'),
    chai           = require('chai'),
    expect         = require('chai').expect,
    assert         = require('chai').assert,
    sinon          = require('sinon'),
    fake           = false,
    params;

try {
  params = require('../testing.json');
} catch (err) {
  params = {
    "address": "1619 Pine St.",
    "city": "Boulder",
    "state": "Colorado",
    "zip": "80301"
  };
}

// test constants
var zwsid = process.env.ZWSID;

describe('getDeepSearchResults', function() {
    var zillow = new Zillow(zwsid);
    var parameters = {
        address: params.address,
        city: params.city,
        state: params.state,
        zip: params.zip
    };
    var test = zillow.getDeepSearchResults(parameters);

    it('should return a json object', function() {
        expect(typeof test.then(function(result) {
            result.to.equal('object');
        }));
    });

    it('should return a success message', function() {
        expect(test.then(function(result) {
            result['message']['text'].to.equal
            ('Request successfully processed');
        }));
        expect(test.then(function(result) {
            result['message']['code'].to.equal(0);
        }));
    });
});

describe('getDemographics', function() {
    var zillow = new Zillow(zwsid);
    var parameters = {
        city: params.city,
        state: params.state,
        zip: params.zip
    };
    var test = zillow.getDemographics(parameters);

    it('should be a json object', function() {
        expect(typeof test.then(function(result) {
            result.to.equal('object');
        }));
    });

    it('should return a success message', function() {
        expect(test.then(function(result) {
            result['message']['text'].to.equal
            ('Request successfully processed');
        }));
        expect(test.then(function(result) {
            result['message']['code'].to.equal(0);
        }));
    });
});
