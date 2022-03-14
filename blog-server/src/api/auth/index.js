const express = require('express');
const authController = require('./auth.controller');

const auth = express.Router();

auth.post('/register', authController);

module.exports = auth;
