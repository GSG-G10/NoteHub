const { getDataDB } = require('../database/queries');

const displayNote = (req, res) => {
  getDataDB()
    .then((result) => res.json(result.rows))
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
module.exports = displayNote;
