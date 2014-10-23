var express = require('express');
var request = require('supertest');
var app = require('../app');
var chai = require('chai');
var expect = chai.expect;

describe('app.route', function() {
    beforeEach(function() { });
    afterEach(function() { });

    it('/ should be ok', function (done) {
        request(app).get('/').end(function (err, res) {
            console.log(res.body);
            console.log(res.title);
            console.log(res.text);


            expect(res.statusCode).to.equal(200);
            done();
        });

    });
});