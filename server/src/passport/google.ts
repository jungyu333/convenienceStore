import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
import User from '../entities/User';

dotenv.config();

export default () => {
  passport.use(
    'google',
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: `${process.env.SERVER_BASE_URL}/api/user/google/callback`,
      },

      async (accessToken, refreshToken, profile, done) => {
        const {
          provider,
          _json: { name, picture, email },
        } = profile;
        try {
          const user = await User.findOne({
            where: { email: email, provider: provider },
          });
          if (user) {
            return done(null, user);
          } else {
            const newUser = new User();
            newUser.nickname = name!;
            newUser.avatarUrn = picture;
            newUser.email = email;
            newUser.provider = provider;
            await newUser.save();
            return done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );
};
