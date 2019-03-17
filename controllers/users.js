var tradesService = require('../services').trades;

module.exports = {
  getTrades: async function(req, res, next) {
    try {
      var { userId } = req.params;
      var trades = await tradesService.findAllByFilter({ userId });
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
