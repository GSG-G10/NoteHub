const express = require('express');

const router = express.Router();
const { errorNotFound, errorServer } = require('./errors');
// For test router
router.get('/test', (req, res) => {
  res.send('test server');
});
router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
