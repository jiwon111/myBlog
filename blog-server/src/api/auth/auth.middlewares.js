const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('로그인 필요');
  }
};

exports.generateToken = (req, res, next) => {
  const token = jwt.sign(
    {
      id: req.body.userId,
      hashedPassword: req.body.hashedPassword,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );
  return token;
};

exports.verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(req, process.env.JWT_SECRET);
    // console.log(decoded);
    return 1;
  } catch (err) {
    console.error(err);
  }
};
