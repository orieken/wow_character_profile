var express = require('express');
var request = require('supertest');
var app = require('../app');
var expect = require('chai').expect;

describe('GET /player', function () {
    beforeEach(function () {
    });
    afterEach(function () {
    });

    var req = request(app);

    it('is ok', function (done) {
        req.get('/player').end(function (err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('has a Content-Type of "application/json" ', function (done) {
        req.get('/player').end(function (err, res) {
            expect(res.type).to.equal('application/json');
            done();
        });
    });

    // Checking each property of the response body json by hand
    describe('has the correct properties', function () {
        it('has name', function (done) {
            req.get('/player').end(function (err, res) {
                expect(res.body).to.have.property('name').and.a.valueOf('Rieken');
                done();
            });
        });
        it('has realm', function (done) {
            req.get('/player').end(function (err, res) {
                expect(res.body).to.have.property('realm').and.equals('Firetree');
                done();
            });
        });
        it('has battlegroup', function (done) {
            req.get('/player').end(function (err, res) {
                expect(res.body).to.have.property('battlegroup').and.equals('Reckoning');
                done();
            });
        });
        it('has gender', function (done) {
            req.get('/player').end(function (err, res) {
                expect(res.body).to.have.property('gender').and.equals(0);
                done();
            });
        });
    });

    // Jasmine does not support creating describe() and it() dynamically :( ლ(ಠ益ಠლ)
    describe('Dynamically generating specs based on response body json', function () {
        it('has the correct properties', function (done) {
            req.get('/player').end(function (err, res) {
                Object.getOwnPropertyNames(res.body).forEach(function (item) {
                    //console.log('Property:  ' + item + 'Value:  ' + res.body[item]);
                    expect(res.body).to.have.property(item).and.to.not.be.null;
                });
                done();
            });
        });
    });

});



//    console.log(res.body.constructor.name)
//var characterData = console.log(Object.getOwnPropertyNames(res.body));
// =>
//{
//    lastModified: 1413472821000,
//    name: 'Rieken',
//    realm: 'Firetree',
//    battlegroup: 'Reckoning',
//    class: 2,
//    race: 10,
//    gender: 0,
//    level: 90,
//    achievementPoints: 7475,
//    thumbnail: 'firetree/128/80886144-avatar.jpg',
//    calcClass: 'b',
//    totalHonorableKills: 2082
//};
//
//Object.keys(characterData).forEach(function (stat) {
//    this[stat] = function (value) {
//        console.log(stat, value);
//    };
//}, this);
//
//Object.keys(data).forEach(function (stat) {
//    console.log(this[stat]);
//}, this);