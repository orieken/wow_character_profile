var express = require('express');
var request = require('supertest');
var app = require('../app');
var chai = require('chai');
var expect = chai.expect;

describe('GET /', function() {
    beforeEach(function() { });
    afterEach(function() { });

    var req = request(app);

    it('is ok', function (done) {
        req.get('/').end(function (err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('has a Content-Type of "text/html" ', function (done) {
        req.get('/').end(function (err, res) {
            expect(res.type).to.equal('text/html');
            done();
        });
    });
});