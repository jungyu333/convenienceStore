import express from 'express';
import fs from 'fs';
import multer from 'multer';
import { isLoggedIn } from './middleware';

const router = express.Router();

try {
  fs.accessSync('imageupload');
} catch (err) {
  console.log('imageupload 폴더 생성');
  fs.mkdirSync('imageupload');
}

const uploadImage = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'imageupload');
    },
    filename(req, file, done) {
      done(null, `${Date.now()}_${file.originalname}`);
    },
  }),
  limits: { fieldSize: 20 * 1024 * 1024 },
});

// product image upload
router.post(
  '/image',
  uploadImage.single('image'),
  isLoggedIn,
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

export default router;
