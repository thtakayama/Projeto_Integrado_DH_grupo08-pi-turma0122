var express = require('express');
var router = express.Router();
var AdmController = require('../controllers/AdmController');

router.get('/login', AdmController.login);

module.exports = router;