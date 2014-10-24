var express = require('express');
var router = express.Router();
var http = require('http');

function getJsonData(callback) {
    var options = {
        host: 'us.battle.net',
        path: '/api/wow/character/firetree/Rieken'
    };

    http.request(options).on('response',function (response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            callback(JSON.parse(str));
        });
    }).end();
}

router.get('/', function(req, res) {
    getJsonData(function (player_info) {
        res.status(200);
        res.set({
            'Content-Type': 'application/json'
        });
        res.json(player_info);
    });
});

module.exports = router;
