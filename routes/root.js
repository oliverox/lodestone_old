var express = require('express');
var router = express.Router();

var root = function(params) {
  return router.get('/', function(req, res, next) {
    res.render('index', params);
  });
};

module.exports = root;
