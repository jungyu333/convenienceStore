import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

app.listen(process.env.PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${process.env.PORT}🛡️
  ################################################
`);
  AppDataSource.initialize()
    .then(async () => {
      console.log('database initialized');
    })
    .catch(error => console.error(error));
});
