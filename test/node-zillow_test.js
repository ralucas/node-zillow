'use strict';

var Zillow         = require('../lib/node-zillow.js'),
    mocha          = require('mocha'),
    chai           = require('chai'),
    expect         = require('chai').expect;

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
