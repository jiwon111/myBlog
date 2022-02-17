const express = require('express');
const postController = require('./posts.controller');

const posts = new express();

// posts.get('/', postController.get);
// posts.post('/', postController.post);

posts.get('/', postController);
posts.post('/', postController);

// const print = req => {
//   req.send = {
//     method: req.method,
//     path: req.path,
//     params: req.params,
//   };
// };

// posts.get('/', print);
// posts.post('/', print);
// posts.get('/:id', print);
// posts.delete('/:id', print);
// posts.put('/:id', print);
// posts.patch('/:id', print);

module.exports = posts;
