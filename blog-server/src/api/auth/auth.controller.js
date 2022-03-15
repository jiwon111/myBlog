const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../../models/user');
const { generateToken, verifyToken } = require('./auth.middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/register', async (req, res, next) => {
  console.log(req.body);
  const hash = await bcrypt.hash(req.body.hashedPassword, 10);
  try {
    await User.create({
      userId: req.body.userId,
      hashedPassword: hash,
    });
    return res.status(201);
  } catch (err) {
    next(err);
  }
});

router.get('/token', async (req, res, next) => {
  const token = generateToken(req);
  if (verifyToken(token)) {
    console.log('유효한 토큰');
  }
});
module.exports = router;
