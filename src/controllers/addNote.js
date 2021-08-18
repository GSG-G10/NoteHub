/* eslint-disable camelcase */
const { postDataDB } = require('../database/queries');

const addNote = (req, res) => {
  const { title, content, category_id } = req.body;
  console.log(title, content, category_id);
  postDataDB(title, content, category_id)
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
};
module.exports = addNote;
