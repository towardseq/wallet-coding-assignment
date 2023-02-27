import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public healthcheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const prisma = new PrismaClient();
      const numUsers = (await prisma.user.findMany()).length;
      console.log(`Have ${numUsers} users`);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
