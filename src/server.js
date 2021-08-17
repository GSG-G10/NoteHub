const path = require('path');
const express = require('express');
const router = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 8080);

app.use(router);

module.exports = app;
