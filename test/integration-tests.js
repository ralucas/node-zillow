'use strict';

var Zillow         = require('../lib/node-zillow.js'),
    chai           = require('chai'),
    expect         = require('chai').expect,
    chaiAsPromised = require('chai-as-promised'),
    sinon          = require('sinon'),
    fake           = false,
    params;

chai.use(chaiAsPromised);

var dotenv = require('dotenv');
dotenv.load();

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
    return expect(test).to.eventually.be.an('object');
  });

  it('should return a success message', function(done) {
    expect(test.then(function(result) {
      console.log('res', result)
      result['message'][0]['text'].to.equal('Request successfully processed');
      done();
    }));
    expect(test.then(function(result) {
      result['message'][0]['code'].to.equal(0);
      done();
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

  it('should be a json object', function(done) {
    return expect(test).to.eventually.be.an('object');
  });

  it('should return a success message', function(done) {
    expect(test.then(function(result) {
      console.log('res2', result);
      result['message'][0]['text'].to.equal('Request successfully processed');
        done();
    }));
    expect(test.then(function(result) {
      result['message'][0]['code'].to.equal(0);
      done();
    }));
  });
});

describe('callApi', function() {

  var zillow = new Zillow(zwsid);

  describe('getSearchResults', function() {
    var parameters = {
      address: params.address,
      citystatezip: params.city + ', ' + params.state + ' ' + params.zip
    };

    var test = zillow.callApi('GetSearchResults', parameters);

    it('should be a json object', function(done) {
      return expect(test).to.eventually.be.an('object');
    });

    it('should return a success message', function(done) {
      expect(test.then(function(result) {
        console.log(result['message']);
        result['message'][0]['text'].to.equal('Request successfully processed');
        done();
      }));
      expect(test.then(function(result) {
        result['message'][0]['code'].to.equal(0);
      }));
    });
  });
});
