const tradeDao = require('../dao').trades;
const _ = require('lodash');
const moment = require('moment');
const errors = require('../errors');

module.exports = {
  build: function(obj) {
    obj = obj.toJSON();
    var trade = _.omit(obj, 'userId', 'userName');
    trade.timestamp = moment(trade.timestamp).format('YYYY-MM-DD HH:mm:ss');
    trade.user = {
      id: obj.userId,
      name: obj.userName
    };
    return trade;
  },
  unbuild: function(obj) {
    var trade = _.omit(obj, 'user');
    trade.userId = obj.user.id;
    trade.userName = obj.user.name;
    return trade;
  },
  add: async function(trade) {
    trade = this.unbuild(trade);
    
    try {
      var tradeDb = await tradeDao.findById(trade.id);
      if(tradeDb) {
        throw errors.badRequest('id already exists');
      }

      
      trade = await tradeDao.add(trade);
      trade = this.build(trade);
      return trade;
    } catch (error) {
      throw error;
    }
  },
  findAll: async function() {
    try {
      var trades = await tradeDao.findAll();
      trades = _.map(trades, (obj) => {
        return this.build(obj);
      });

      return trades;
    } catch (error) {
      throw error;
    }
  },

  findAllByFilter: async function(filters) {
    try {
      filters = _.omitBy(filters, _.isUndefined);
      var trades = await tradeDao.findAll(filters);
      trades = _.map(trades, (obj) => {
        return this.build(obj);
      });

      if(trades.length === 0) {
        throw errors.notFound('trades not found');
      }

      return trades;
    } catch (error) {
      throw error;
    }
  },

  deleteAll: async function() {
    try {
      await tradeDao.deleteAll();
    } catch (error) {
      throw error;
    }
  },
};
