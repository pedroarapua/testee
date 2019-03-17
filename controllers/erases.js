var tradesService = require('../services').trades;

module.exports = {
  deleteAll: async function(req, res, next) {
    try {
      await tradesService.deleteAll();
      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
};
