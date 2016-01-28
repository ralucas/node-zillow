'use strict';

var helpers        = require('../lib/helpers.js'),
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
});
