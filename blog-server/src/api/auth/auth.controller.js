const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../../models/user');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const hashed = await bcrypt.hash(req.body.hashedPassword, 12);
    console.log(req.body.userId, req.body.hashedPassword, hashed);
    const user = await User.create({
      userId: req.body.userId,
      hashedPassword: hashed,
    });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
