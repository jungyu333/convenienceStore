import express from 'express';
import { isLoggedIn } from './middleware';

const router = express.Router();

// load store position( 임의 데이터)
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    const randNum = Math.floor(Math.random() * 4);

    const mockData = [
      { lat: 37.5416, log: 127.0786 },
      { lat: 37.5424, log: 127.0781 },
      { lat: 37.5425, log: 127.0768 },
      { lat: 37.5432, log: 127.0779 },
    ];
    res.status(200).json(mockData[randNum]);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
