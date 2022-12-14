import express from 'express';
import passport from 'passport';
import Cart from '../entities/Cart';
import User from '../entities/User';
import sendMail from '../nodemailer/index';
import randomNumber from '../util/randomNumber';
import { isLoggedIn, isNotLoggedIn } from './middleware';

const router = express.Router();

// google login
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get('/google/callback', isNotLoggedIn, async (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    if (!user) {
      return res.redirect(`${process.env.ORIGIN_URL}/login`);
    }
    req.logIn(user, function (err) {
      return res.redirect(`${process.env.ORIGIN_URL}`);
    });
  })(req, res, next);
});

// kakao login
router.get('/kakao', passport.authenticate('kakao'));

router.get(`/kakao/callback`, isNotLoggedIn, async (req, res, next) => {
  passport.authenticate('kakao', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    if (!user) {
      return res.redirect(`${process.env.ORIGIN_URL}/login`);
    }
    req.logIn(user, function (err) {
      return res.redirect(`${process.env.ORIGIN_URL}`);
    });
  })(req, res, next);
});

//load myinfo
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: {
          id: req.user?.id,
        },
        select: {
          id: true,
          nickname: true,
          avatarUrn: true,
          role: true,
          provider: true,
          email: true,
        },
      });

      return res.status(200).json(user);
    } else {
      return res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//email 인증번호
router.post('/auth', isNotLoggedIn, async (req, res, next) => {
  try {
    const email = req.body.email;
    const number = randomNumber();
    await sendMail(
      email,
      '이메일 인증번호입니다.',
      `인증번호 ${number}를 입력해주세요`,
    );

    res.status(200).send(`${number}`);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//email 중복체크
router.post('/overrap', isNotLoggedIn, async (req, res, next) => {
  try {
    const email = req.body.email;

    if (email) {
      const existUser = await User.findOne({
        where: {
          email: email,
        },
      });
      return existUser
        ? res.status(400).send(false)
        : res.status(200).send(true);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//login
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (info) {
      return res.status(400).send(info.message);
    }
    return req.login(user, async loginError => {
      if (loginError) {
        return next(loginError);
      }
      const userWithOutPassword = await User.findOne({
        where: { id: req.user?.id },
        select: {
          id: true,
          email: true,
          nickname: true,
          avatarUrn: true,
          role: true,
          provider: true,
        },
      });
      return res.status(200).json(userWithOutPassword);
    });
  })(req, res, next);
});

//logout
router.post('/logout', isLoggedIn, async (req, res, next) => {
  await Cart.delete({
    user: {
      id: req.user?.id,
    },
  });
  req.logout(err => {
    if (err) {
      return next(err);
    }

    if (req.session) {
      req.session.destroy(err => {
        res.clearCookie('convenience');
        res.status(200).send('ok');
      });
    } else {
      res.status(200).send('ok');
    }
  });
});

//admin login
router.post('/admin', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('admin', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const userWithoutPassword = await User.findOne({
        where: { id: req.user?.id },
        relations: ['products'],
        select: {
          id: true,
          nickname: true,
          avatarUrn: true,
          email: true,
          role: true,
          products: true,
          provider: true,
        },
      });

      return res.status(200).json(userWithoutPassword);
    });
  })(req, res, next);
});

export default router;
