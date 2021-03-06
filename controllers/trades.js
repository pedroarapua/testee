var tradesService = require('../services').trades;

module.exports = {
  add: async function(req, res, next) {
    try {
      var trade = await tradesService.add(req.body);
      res.status(201).json(trade);
    } catch (error) {
      next(error);
    }
    
  },
  get: async function(req, res, next) {
    try {
      var trades = await tradesService.findAll();
      res.status(200).json(trades);
    } catch (error) {
      next(error);
    }
  },
  getByFilter: async function(req, res, next) {
    try {
      var { userId, symbol } = req.params;
      var trades = await tradesService.findAllByFilter({ userId, symbol });
      res.status(200).json(trades);
    } catch (error) {
      next(error);
    }
  }
};
