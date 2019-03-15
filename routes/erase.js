var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Route to delete all trades

module.exports = function(app){
    var controller = app.controllers.trades;
    
    app.route('/trade');
    .delete(controller.removetrade);
};