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
  try {
    const id = req.body.userId;
    const exUser = await User.findOne({ where: { userId: id } });
    if (exUser) {
      return res.sendStatus(400);
    }
    const hash = await bcrypt.hash(req.body.hashedPassword, 10);
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
  passport.authenticate(
    'local',
    { session: false },
    (authError, user, info) => {
      if (authError) {
        return next(authError);
      }
      if (!user) {
        // return res.send('아이디나 비밀번호가 일치하지 않습니다.');
        return res.sendStatus(info.status);
      }
      return req.login(user, loginError => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        const token = generateToken(req);
        return res.json({
          success: true,
          message: '로그인 성공',
          status: 200,
          token,
        });
      });
    },
  )(req, res, next);
});

router.get('/token', async (req, res, next) => {
  const token = generateToken(req);
  if (verifyToken(token)) {
    return res.json({ status: 203, message: '유효한 토큰' });
  }
});

router.get('/logout', async (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
