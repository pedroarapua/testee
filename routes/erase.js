var express = require('express');
var router = express.Router();
var erases = require('../controllers/erases');

// Routes related to erases

router.delete('/', erases.deleteAll);

module.exports = router;