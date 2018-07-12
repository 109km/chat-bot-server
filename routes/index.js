const express = require('express');
const router = express.Router();
const Vue = require('vue');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '测试机器人' });
});

module.exports = router;
