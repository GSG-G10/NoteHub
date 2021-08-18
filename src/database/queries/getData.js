const connection = require('../config/connection');

const sqlScript = {
  text: 'SELECT category.name, notes.title, notes.content, notes.date_created FROM category INNER JOIN notes ON notes.category_id = category.id;',
};
const getDataDB = () => connection.query(sqlScript);

module.exports = getDataDB;
