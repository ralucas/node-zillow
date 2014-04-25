'use strict';

var Zillow = require('../lib/node-zillow.js'),
    mocha  = require('mocha'),
    expect = require('chai').expect,
    sinon  = require('sinon');

console.log(typeof Zillow);    

describe('Zillow', function() {
    
    describe('constructor', function() {
        it('should be a function', function() {
            expect(typeof Zillow).to.equal('function');
        });
    });
    describe('an instance of', function() {
        it('should be an instanceof Zillow', function() {
            var zillow = new Zillow('zzz');
            expect(zillow).to.be.an.instanceof(Zillow);
        });
    });
});
