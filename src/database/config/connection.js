require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DB_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let dbURL = '';

switch (NODE_ENV) {
  case 'production':
    dbURL = DB_URL;
    break;

  case 'development':
    dbURL = DEV_DB_URL;
    break;

  case 'test':
    dbURL = TEST_DB_URL;
    break;

  default:
    throw new Error('DB Connection Failed!!');
}

const option = {
  connectionString: dbURL,
  ssl: true,
};

module.exports = new Pool(option);
