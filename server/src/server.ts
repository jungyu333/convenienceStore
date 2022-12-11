import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import cors from 'cors';
import userRouter from './routes/user';
import signUpRouter from './routes/signUp';
import productRouter from './routes/product';
import passportConfig from './passport';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
  }),
);

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    name: 'convenience',
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60 * 60 * 1000 },
    secret: process.env.COOKIE_SECRET!,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', express.static('avatarupload'));
app.use('/', express.static('imageupload'));
app.use('/api/user', userRouter);
app.use('/api/signUp', signUpRouter);
app.use('/api/product', productRouter);

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
