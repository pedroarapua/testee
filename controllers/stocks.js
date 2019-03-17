var tradesService = require('../services').trades;

module.exports = {
  getTrades: async function(req, res, next) {
    try {
      var { symbol } = req.params;
      var trades = await tradesService.findAllByFilter({ symbol });
      res.status(200).json(trades);
    } catch (error) {
      next(error);
    }
  }
};
