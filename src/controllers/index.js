const express = require('express');
const displayData = require('./displayData');

const router = express.Router();
const { errorNotFound, errorServer } = require('./errors');

router.get('/showNotes', displayData);
router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
