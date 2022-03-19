const express = require('express');
const authController = require('./auth.controller');

const auth = express.Router();

auth.get('/', authController);
auth.post('/register', authController);
auth.post('/login', authController);
auth.get('/logout', authController);
auth.get('/token', authController);

module.exports = auth;
