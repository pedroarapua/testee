var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Routes related to trades

router.post('/', trades.add);
router.get('/', trades.get);
router.get('/users/:userId', trades.getByFilter);
router.get('/stocks/:symbol', trades.getByFilter);
router.get('/users/:userId/stocks/:symbol', trades.getByFilter);

module.exports = router;