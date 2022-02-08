import { Router } from 'express';
import posts from './posts';

const api = new Router();

api.use('/posts', posts);

export default api;
