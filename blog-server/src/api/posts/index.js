import { Router } from 'express';

const posts = new Router();

const print = req => {
  req.body = {
    method: req.method,
    path: req.path,
    params: req.params,
  };
};

posts.get('/', (req, res) => {
  res.send(print(req));
});
posts.post('/', print);
posts.get('/:id', (req, res) => {
  res.send(print(req));
});
posts.delete('/:id', print);
posts.put('/:id', print);
posts.patch('/:id', print);

// posts.post('/', print);
// posts.get('/:id', print);
// posts.delete('/:id', print);
// posts.put('/:id', print);
// posts.patch('/:id', print);
export default posts;
