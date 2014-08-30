'use strict';

var Zillow = require('../lib/node-zillow.js'),
    expect = require('chai').expect,
    sinon  = require('sinon'),
    fake   = false,
    env;

try {
  env = require('../testing.json');
} catch (err) {
  env = {
    "address": "1619 Pine St",
    "city": "Boulder",
    "state": "Colorado",
    "zip": "80302"
  };
  fake = true;
}

// test constants
var zwsid = env.zwsid;

describe('getDeepSearchResults', function() {
  this.timeout(4000);

  var zillow = new Zillow(zwsid);

  //var test = zillow.getDeepSearchResults(env);

  if (fake) sinon.stub(zillow, 'getDeepSearchResults').yieldsAsync({"test": "testing"});

  it('should return json', function(done) {
    zillow.getDeepSearchResults(env, function(err, json) {
      console.log('json', json);
      expect(json).to.be.an('object');
      done();
    });
  });

  it('should return a success message', function(done) {
    this.timeout(10000);
    zillow.getDeepSearchResults(env, function(err, json) {
      console.log('json1', json);
      expect(json['message']['text']).to.equal('Request successfully processed');
      expect(json['message']['code']).to.equal(0);
      done();
    });
  });

});

describe('getDemographics', function() {
    var zillow = new Zillow(zwsid);

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
