import express from 'express';
import Cart from '../entities/Cart';
import Product from '../entities/Product';
import User from '../entities/User';
import { isLoggedIn } from './middleware';

const router = express.Router();

// add Cart
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    const user = await User.findOne({
      where: {
        id: req.user?.id,
      },
    });
    const product = await Product.findOne({
      where: {
        id: productId,
      },
    });
    if (product) {
      const existCart = await Cart.findOne({
        where: {
          product: {
            id: productId,
          },
          user: {
            id: req.user?.id,
          },
        },
      });

      if (existCart) {
        existCart.quantity += quantity;
        await existCart.save();
      } else {
        const newCart = new Cart();
        newCart.quantity = quantity;
        newCart.product = product;
        newCart.user = user;
        await newCart.save();
      }

      return res.status(200).send('ok');
    } else {
      return res.status(401).send('존재하지 않는 상품입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
