const jwt = require('jsonwebtoken');

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
    decoded = jwt.verify(req, process.env.JWT_SECRET);
    console.log(decoded);
    return 1;
  } catch (err) {
    console.error(err);
  }
};
