'use strict';

var Zillow         = require('../lib/node-zillow.js'),
    expect         = require('chai').expect,
    params;

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

  it('should be a json object', function(done) {
    test.then(function(result) {
      expect(result).to.be.an('object');
      done();
    });
  });

  it('should return a success message', function(done) {
    test.then(function(result) {
      expect(result['message'][0]['text'][0]).to.equal('Request successfully processed');
      done();
    });
  });

  it('should return 0', function(done) {
    test.then(function(result) {
      expect(result['message'][0]['code'][0]).to.equal('0');
      done();
    });
  });
});



describe('getUpdatedPropertyDetails', function() {
  var zillow = new Zillow(zwsid);

  // Mork and Mindy's house, no updates (1619 Pine St, Boulder, CO, zpid: 13177031)
  var failTest = zillow.getUpdatedPropertyDetails(13177031);

  it('should return a json object even without updated data', function(done) {
    failTest.then(function(result) {
      expect(result).to.be.an('object');
      done();
    });
  });

  it('should return a message telling us there is no updated data', function(done) {
    failTest.then(function(result) {
      expect(result['message'][0]['text'][0]).to.equal('Error: no updated data is available for this property');
      done();
    });
  });

  it('should return a 502', function(done) {
    failTest.then(function(result) {
      expect(result['message'][0]['code'][0]).to.equal('502');
      done();
    });
  });

  // House with updates. 2512 Mapleton Ave. Boulder, CO 80304. zpid: 13176378
  var passTest = zillow.getUpdatedPropertyDetails(13176378);

  it('should return a json object', function(done) {
    passTest.then(function(result) {
      expect(result).to.be.an('object');
      done();
    });
  });

  it('should return a success message', function(done) {
    passTest.then(function(result) {
      expect(result['message'][0]['text'][0]).to.equal('Request successfully processed');
      done();
    });
  });

  it('should return 0', function(done) {
    passTest.then(function(result) {
      expect(result['message'][0]['code'][0]).to.equal('0');
      done();
    });
  });

});


describe('getDemographics', function() {
  var zillow = new Zillow(zwsid);
  
  var parameters = {
    zip: params.zip
  };

  var test = zillow.getDemographics(parameters);

  it('should be a json object', function(done) {
    test.then(function(result) {
      expect(result).to.be.an('object');
      done();
    });
  });

  it('should return a success message', function(done) {
    test.then(function(result) {
      expect(result['message'][0]['text'][0]).to.equal('Request successfully processed');
      done();
    });
  });

  it('should return 0', function(done) {
    test.then(function(result) {
      expect(result['message'][0]['code'][0]).to.equal('0');
      done();
    });
  });

});

describe('callApi', function() {

  var zillow = new Zillow(zwsid);

  describe('GetDeepComps', function() {
    var parameters = {
      zpid: 13177031,
      count: 10
    };

    var test = zillow.callApi('GetDeepComps', parameters);

    this.timeout(5000);

    it('should be a json object', function(done) {
      test.then(function(result) {
        expect(result).to.be.an('object');
        done();
      });
    });

    it('should return a success message', function(done) {
      test.then(function(result) {
        expect(result['message'][0]['text'][0]).to.equal('Request successfully processed');
        done();
      });
    });

    it('should return 0', function(done) {
      test.then(function(result) {
        expect(result['message'][0]['code'][0]).to.equal('0');
        done();
      });
    });

    it('should not throw an error', function(done) {
      var testError = function() {
        test;
      };
      expect(testError).to.not.throw(Error);
      done();
    });

    it('should throw an error without parameters', function(done) {
      var testError = function() {
        zillow.callApi('GetDeepComps');
      };
      expect(testError).to.throw(Error);
      done();
    });

    it('should throw an error with a missing parameter', function(done) {
      var parameters = {zpid: 111111};
      var testError = function() {
        zillow.callApi('GetDeepComps', parameters);
      };
      expect(testError).to.throw(Error);
      expect(testError).to.throw(/Missing parameter/);
      done();
    });
    
  });

  describe('GetDeepSearchResults', function() {
    var parameters = {
      address: params.address,
      citystatezip: params.city + ', ' + params.state + ' ' + params.zip
    };

    it('should return an object', function(done) {
      this.timeout(5000);
      zillow.callApi('GetDeepSearchResults', parameters)
        .then(function(data) {
          expect(data).to.be.an('object');
          done();
        });
    });

  });

});
