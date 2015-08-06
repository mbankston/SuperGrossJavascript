var express = require('express');
var router = express.Router();
var path = require('path');
var modifying = require('../public/data/modifying.json');
var adjective = require('../public/data/adjective.json');
var technology = require('../public/data/technology.json');

router.get("/adjective", function(req, res){
    res.json(adjective);


});
router.get("/modifying", function(req, res){
    res.json(modifying);


});
router.get("/technology", function(req, res){
    res.json(technology);


});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;