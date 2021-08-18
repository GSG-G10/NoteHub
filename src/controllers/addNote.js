/* eslint-disable camelcase */
const { postDataDB } = require('../database/queries');

const addNote = (req, res) => {
  const { title, content, category_id } = req.body;

  postDataDB(title, content, category_id)
    // eslint-disable-next-line no-console
    .then((result) => console.log(result.rows))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
};
module.exports = addNote;
