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



describe('getUpdatedPropertyDetails', function() {
    var zillow = new Zillow(zwsid);

    // Mork and Mindy's house, no updates (1619 Pine St, Boulder, CO, zpid: 13177031)
    var failTest = zillow.getUpdatedPropertyDetails(13177031);

    it('should return a json object even without updated data', function() {
        expect(typeof failTest.then(function(result) {
            result.to.equal('object');
        }));
    });

    it('should return a message telling us there is no updated data', function() {
        expect(failTest.then(function(result) {
            result['message']['text'].to.equal
            ('Error: no updated data is available for this property');
        }));
        expect(failTest.then(function(result) {
            result['message']['code'].to.equal(502);
        }));
    });

    // House with updates. 2512 Mapleton Ave. Boulder, CO 80304. zpid: 13176378
    var passTest = zillow.getUpdatedPropertyDetails(13176378);

    it('should return a json object', function() {
        expect(typeof passTest.then(function(result) {
            result.to.equal('object');
        }));
    });

    it('should return a success message', function() {
        expect(passTest.then(function(result) {
            result['message']['text'].to.equal
            ('Request successfully processed');
        }));
        expect(passTest.then(function(result) {
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
