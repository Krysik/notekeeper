import { Request, Response, NextFunction } from 'express';
import logger from '../services/winston';

const logMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} Requesting URL: ${req.url}`);
  next();
};

export default logMiddleware;
