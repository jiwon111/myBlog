const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId',
        passwordField: 'hashedPassword',
      },
      async (userId, hashedPassword, done) => {
        try {
          const isUser = await User.findOne({ where: { userId } });
          if (isUser) {
            const result = await bcrypt.compare(
              hashedPassword,
              isUser.hashedPassword,
            );
            if (result) {
              done(null, isUser);
            } else {
              done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
            }
          } else {
            done(null, false, { message: '가입되지 않은 회원입니다.' });
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      },
    ),
  );
};
