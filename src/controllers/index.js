const express = require('express');
const addNote = require('./addNote');
const displayNote = require('./displayNote');

const router = express.Router();
const { errorNotFound, errorServer } = require('./errors');

router.get('/showNotes', displayNote);
router.post('/addNote', addNote);
router.use(errorNotFound);
router.use(errorServer);

module.exports = router;
