import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

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
});
