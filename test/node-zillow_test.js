'use strict';

var Zillow = require('../lib/node-zillow.js'),
    mocha  = require('mocha'),
    expect = require('chai').expect,
    sinon  = require('sinon');

describe('Zillow', function() {
    it('should be an instanceof', function() {
        var zillow = new Zillow('xxx');
        expect(zillow instanceof Zillow).to.be(true);
    });
});
