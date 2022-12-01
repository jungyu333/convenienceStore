import express from 'express';
import User from '../entities/User';
import sendMail from '../nodemailer/index';
import randomNumber from '../util/randomNumber';

const router = express.Router();

//email 인증번호
router.post('/auth', async (req, res, next) => {
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
router.post('/overrap', async (req, res, next) => {
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

export default router;