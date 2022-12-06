import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../entities/User';
import bcrypt from 'bcryptjs';

export default () => {
  passport.use(
    'admin',
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: {
              email: email,
            },
          });
          if (!user) {
            return done(null, false, {
              message: '존재하지 않는 이용자입니다.',
            });
          }
          if (user.role !== 1) {
            return done(null, false, { message: '일반 사용자 계정입니다.' });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { message: '비밀번호가 틀렸습니다' });
        } catch (error) {
          return done(error);
        }
      },
    ),
  );
};
