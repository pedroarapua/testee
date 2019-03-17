var models = require('../models');

module.exports = {
  add: async function(trade) {
    try {
      trade = await models.Trade.build(trade).save();
      return trade;
    } catch (error) {
      throw error;
    }
  },
  findById: async function(id) {
    try {
      var obj = await models.Trade.findByPk(id);
      return obj;
    } catch (error) {
      throw error;
    }
  },
  findAll: async function(where) {
    try {
      var trades = await models.Trade.findAll({ where });
      
      return trades;
    } catch (error) {
      throw error;
    }
    
  },
  deleteAll: async function() {
    try {
      await models.Trade.destroy({
        where: {},
        truncate: true
      });
      
    } catch (error) {
      throw error;
    }
    
  }
};
