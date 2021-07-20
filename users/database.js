const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dev: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT || 5432,
    dialect: 'postgres',
    migrationStorageTableName: 'migrations-users',
  },
  prod: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT || 5432,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
    migrationStorageTableName: 'migrations-users',
  },
};
