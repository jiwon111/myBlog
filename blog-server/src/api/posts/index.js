const express = require('express');

const posts = new express();

const print = req => {
  req.send = {
    method: req.method,
    path: req.path,
    params: req.params,
  };
};

posts.get('/', print);
posts.post('/', print);
posts.get('/:id', print);
posts.delete('/:id', print);
posts.put('/:id', print);
posts.patch('/:id', print);

module.exports = posts;
