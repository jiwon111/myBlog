const express = require('express');
const postController = require('./posts.controller');

const posts = express.Router();

posts.get('/', postController);
posts.get('/:id', postController);
posts.post('/', postController);
posts.put('/:id', postController);
posts.delete('/:id', postController);

module.exports = posts;
