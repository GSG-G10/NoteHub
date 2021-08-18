const connection = require('../config/connection');

const getDataDB = () => connection.query('SELECT * FROM notes;');

module.exports = getDataDB;
