import express from 'express';
import User from '../entities/User';
import fs from 'fs';
import multer from 'multer';
import { isNotLoggedIn } from './middleware';

const router = express.Router();

try {
  fs.accessSync('avatarupload');
} catch (err) {
  console.log('avatarupload 폴더 생성');
  fs.mkdirSync('avatarupload');
}

const uploadAvatar = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'avatarupload');
    },
    filename(req, file, done) {
      done(null, `${Date.now()}_${file.originalname}`);
    },
  }),
  limits: { fieldSize: 20 * 1024 * 1024 },
});

//avatar 업로드
router.post(
  '/avatar',
  uploadAvatar.single('avatar'),
  isNotLoggedIn,
  async (req, res, next) => {
    try {
      if (req.file) {
        return res.json(req.file.filename);
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
);

// 회원가입
router.post('/', uploadAvatar.none(), isNotLoggedIn, async (req, res, next) => {
  try {
    const email = req.body.email;
    const nickname = req.body.nickname;
    const password = req.body.password;
    const avatar = req.body.avatar;

    const user = new User();

    user.email = email;
    user.nickname = nickname;
    user.avatarUrn = avatar;
    user.password = password;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
