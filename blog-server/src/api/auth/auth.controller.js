const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../../../models/user');
const {
  isLoggedIn,
  generateToken,
  verifyToken,
} = require('./auth.middlewares');

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
  const hash = await bcrypt.hash(req.body.hashedPassword, 10);
  try {
    await User.create({
      userId: req.body.userId,
      hashedPassword: hash,
    });
    return res.status(201).send('jiwon');
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.send('아이디나 비밀번호가 일치하지 않습니다.');
    }
    return req.login(user, loginError => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.send('로그인 성공');
    });
  })(req, res, next);
});

router.get('/logout', async (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/token', async (req, res, next) => {
  const token = generateToken(req);
  if (verifyToken(token)) {
    console.log('유효한 토큰');
  }
});
module.exports = router;
