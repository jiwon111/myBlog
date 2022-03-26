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
              // console.log('유저임');
              done(null, isUser);
            } else {
              // console.log('비밀번호가 일치하지 않음');
              done(null, false, { status: 401 });
            }
          } else {
            // console.log('가입되지 않은 회원임');
            done(null, false, { status: 403 });
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      },
    ),
  );
};
