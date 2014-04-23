'use strict';

var Zillow = require('../lib/node-zillow.js'),
    mocha  = require('mocha'),
    expect = require('chai').expect,
    sinon  = require('sinon');

describe('Zillow', function() {
    it('should return an object', function() {
        var zillow = new Zillow('xxx');
        expect(zillow).to.be(typeof object);
    });
});
