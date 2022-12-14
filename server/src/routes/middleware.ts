import { NextFunction, Request, Response } from 'express';

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인 한 사용자는 접근할 수 없습니다.');
  }
};

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role === 1) {
    next();
  } else {
    res.status(401).send('관리자만 사용 가능한 기능입니다.');
  }
};

export { isLoggedIn, isNotLoggedIn, isAdmin };
