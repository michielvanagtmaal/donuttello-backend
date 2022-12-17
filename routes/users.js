var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', authController.signup);

router.post('/login', authController.login);

module.exports = router; 
