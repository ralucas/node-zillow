'use strict';

var Zillow         = require('../lib/node-zillow.js'),
    helpers        = require('../lib/helpers.js'),
    expect         = require('chai').expect,
    sinon          = require('sinon');

describe('Zillow', function() {

  describe('constructor', function() {
    it('should be a function', function() {
      expect(typeof Zillow).to.equal('function');
    });
  });

  describe('an instance of', function() {
    it('zillow should be an instanceof Zillow', function() {
      var zillow = new Zillow('xxx');
      expect(zillow).to.be.an.instanceof(Zillow);
    });
  });

});

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
