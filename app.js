const express = require('express');

const app = express();

const SubscriberController = require('./controllers/SubscribersController');

app.get('/subscribers', SubscriberController.getAll);

module.exports = app;