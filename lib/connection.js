const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('bet', 'root', '', {
    dialect: 'mysql',
    dialectOptions: {
      // Your mysql2 options here
    }
  })
  module.exports=sequelize;
  global.sequelize=sequelize;