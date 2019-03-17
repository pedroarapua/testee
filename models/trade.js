'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    type: DataTypes.STRING,
    symbol: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    timestamp: DataTypes.DATE,
    userId: {
      type: Sequelize.INTEGER,
      field: 'user_id'
    },
    userName: {
      type: Sequelize.STRING,
      field: 'user_name'
    }
  }, {
    timestamps: false,
    defaultScope: {
      order: [['id', 'ASC']]
    }
  });
  Trade.associate = function(models) {
    // associations can be defined here
  };
  return Trade;
};