var express = require('express');
var router = express.Router();
var stocks = require('../controllers/stocks');

// Routes related to trades

router.get('/:symbol/trades', stocks.getTrades);

module.exports = router;