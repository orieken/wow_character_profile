var express = require('express');
var request = require('supertest');
var app = require('../app');
var expect = require('chai').expect;

describe('GET /battle_pets', function () {
    beforeEach(function () {
        this.timeout(5000);
    });
    afterEach(function () {});

    var req = request(app);

    it('is ok', function (done) {
        req.get('/battle_pets').end(function (err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('has a Content-Type of "application/json" ', function (done) {
        req.get('/battle_pets').end(function (err, res) {
            expect(res.type).to.equal('application/json');
            done();
        });
    });

    // Checking each property of the response body json by hand
    describe('has the correct properties', function () {
        it('has name', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                expect(res.body).to.have.property('name').and.a.valueOf('Rieken');
                done();
            });
        });
        it('has realm', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                expect(res.body).to.have.property('realm').and.equals('Firetree');
                done();
            });
        });
        it('has battlegroup', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                expect(res.body).to.have.property('battlegroup').and.equals('Reckoning');
                done();
            });
        });
        it('has gender', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                expect(res.body).to.have.property('gender').and.equals(0);
                done();
            });
        });
        it('has pets', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                expect(res.body).to.have.property('pets').and.be.an('object');
                done();
            });
        });
        it('pets collected is an array', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                expect(res.body.pets).to.have.deep.property('collected').and.be.an('array');
                done();
            });
        });

    });

    // Jasmine does not support creating describe() and it() dynamically :( ლ(ಠ益ಠლ)
    describe('Dynamically generating specs based on response body json', function () {
        it('has the correct properties', function (done) {
            req.get('/battle_pets').end(function (err, res) {
                Object.getOwnPropertyNames(res.body).forEach(function (item) {
                    //console.log('Property:  ' + item + ' Value:  ' + res.body[item] + ':  exists');
                    expect(res.body).to.have.property(item).and.to.not.be.null;
                });
                done();
            });
        });
    });

});

