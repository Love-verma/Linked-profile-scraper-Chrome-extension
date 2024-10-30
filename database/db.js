const { Sequelize } = require('sequelize');
const config = require('../config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Error syncing database:', err));

module.exports = sequelize;