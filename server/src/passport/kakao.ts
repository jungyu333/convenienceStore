import passport from 'passport';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import dotenv from 'dotenv';
import User from '../entities/User';

dotenv.config();

export default () => {
  passport.use(
    'kakao',
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID!,
        callbackURL: `${process.env.SERVER_BASE_URL}/api/user/kakao/callback`,
      },

      async (accessToken, refreshToken, profile, done) => {
        const {
          username,
          _json: {
            properties: { profile_image },
            kakao_account: { email },
          },
        } = profile;
        try {
          const user = await User.findOne({ where: { email: email } });
          if (user) {
            return done(null, user);
          } else {
            const newUser = new User();
            newUser.nickname = username!;
            newUser.avatarUrn = profile_image;
            newUser.email = email;
            newUser.provider = 'kakao';
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
