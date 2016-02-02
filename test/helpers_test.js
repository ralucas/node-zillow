'use strict';

var helpers        = require('../lib/helpers.js'),
    mockData       = require('./mock_data.js'),
    expect         = require('chai').expect;

describe('helpers', function() {

  describe('checkParams', function() {

    it('should return undefined', function() {
      expect(helpers.checkParams({zpid: 11111}, [])).to.be.undefined;
    });

    it('should throw error', function() {
      var fn = function() {
        helpers.checkParams({}, ['zpid']);
      };
      expect(fn).to.throw(Error);
      expect(fn).to.throw(/Missing parameters/);
    });

  });

  describe('toQueryString', function() {

    var params = {
        test: 'hello'
      };

    it('should return a string', function() {
      expect(helpers.toQueryString(params, '12345')).to.be.a('string');
    });

    it('should contain hello in the string', function() {
      expect(helpers.toQueryString(params, '12345')).to.contain('hello');
    });

  });

  describe('toJson', function() {
    var xml = mockData.mockXml;
    var testResult = helpers.toJson(xml);

    it('should return a promise object', function() {
      expect(testResult).to.be.a('object');
    });

    it('should have the correct top level', function(done) {
      testResult.then(function(res) {
        expect(res).to.include.keys('SearchResults:searchresults'); 
        done();
      });
    });

    it('should parse the xml correctly', function(done) {
      testResult.then(function(res) {
        expect(res['SearchResults:searchresults'])
          .to.include.keys('$', 'request', 'message', 'response');
        done(); 
      });
    });

  });

  describe('handleResponse', function() {
    var json = mockData.mockJson;
    var testResult = helpers.handleResponse(json);

    it('should return an object', function() {
      expect(testResult).to.be.an('object');
    });

    it('should not include the `$`', function() {
      expect(testResult).to.not.include.keys('$');
    });

    it('should include `request`, `response`, `message`', function() {
      expect(testResult)
        .to.include.keys('request', 'message', 'response');
    });

  });
});
