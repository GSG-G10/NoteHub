const connection = require('../config/connection');

const postDataDB = (title, content, categoryId) => connection.query('INSERT INTO notes (title, content, category_id) VALUES ($1, $2, $3) RETURNING *;', [title, content, categoryId]);

module.exports = postDataDB;
