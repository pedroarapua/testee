var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

// Routes related to trades

router.get('/:userId/trades', users.getTrades);
router.get('/:userId/stocks/:symbol/trades', users.getByFilter);

module.exports = router;