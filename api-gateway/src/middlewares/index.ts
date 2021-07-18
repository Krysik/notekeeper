import { Express } from 'express';
import logMiddleware from './log';

const setupMiddlewares = (app: Express) => {
  app.use(logMiddleware);
  app.disable('x-powered-by');
};

export default setupMiddlewares;
