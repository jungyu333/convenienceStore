import express from 'express';
import fs from 'fs';
import multer from 'multer';
import Image from '../entities/Image';
import Product from '../entities/Product';
import User from '../entities/User';
import { isAdmin, isLoggedIn } from './middleware';

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
  isAdmin,
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

// product upload
router.post(
  `/`,
  uploadImage.none(),
  isLoggedIn,
  isAdmin,
  async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.user?.id,
        },
      });
      if (user) {
        const name = req.body.name;
        const price = req.body.price;
        const stock = req.body.stock;
        const description = req.body.description;

        const newProduct = new Product();

        newProduct.name = name;
        newProduct.price = parseInt(price);
        newProduct.stock = parseInt(stock);
        newProduct.description = description;
        newProduct.writer = user;

        await newProduct.save();

        if (Array.isArray(req.body.image)) {
          req.body.image.forEach(async (img: string) => {
            const newImage = new Image();
            newImage.src = img;
            newImage.product = newProduct;
            await newImage.save();
          });
        } else {
          const newImage = new Image();
          newImage.src = req.body.image;
          newImage.product = newProduct;
          await newImage.save();
        }
      }
      res.status(200).send('ok');
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
);

// product load
router.post('/detail', async (req, res, next) => {
  try {
    const id = req.body.id;
    if (id) {
      const product = await Product.findOne({
        where: {
          id: parseInt(id as string),
        },
        relations: ['imageUrl'],
      });
      if (product) {
        return res.status(200).json(product);
      } else {
        return res.status(400).send('존재하지 않는 상품입니다.');
      }
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// products load
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find({
      relations: ['imageUrl'],
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// product stock edit
router.post('/stock', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const id = req.body.productId;
    const stock = req.body.stock;
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });

    if (product) {
      product.stock = stock;
      await product.save();
      res.status(200).json({ productId: product.id, stock: product.stock });
    } else {
      res.status(400).send('등록되지 않은 상품입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// product delete
router.post('/delete', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const id = req.body.id;
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });

    if (product) {
      const images = await Image.find({
        where: {
          product: {
            id: id,
          },
        },
      });

      images.forEach(async image => {
        image.product = null;
        await image.save();
      });

      await Product.delete({
        id: id,
      });
    }
    const products = await Product.find({
      relations: ['imageUrl'],
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
