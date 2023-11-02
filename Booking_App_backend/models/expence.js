const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expence = sequelize.define('expence',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,   
});

module.exports = Expence;