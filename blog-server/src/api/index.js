const express = require('express');
const posts = require('./posts');

const api = new express();

api.use('/posts', posts);

module.exports = api;
