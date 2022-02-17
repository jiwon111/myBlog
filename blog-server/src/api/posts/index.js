const express = require('express');
const postController = require('./posts.controller');

const posts = express.Router();

posts.get('/', postController);
posts.post('/', postController);

module.exports = posts;
