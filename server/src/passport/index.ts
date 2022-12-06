import passport from 'passport';
import User from '../entities/User';
import admin from './admin';
import local from './local';

export default () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: {
          id: id,
        },
      });
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });
  local();
  admin();
};
