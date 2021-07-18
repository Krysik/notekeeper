import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import setupMiddlewares from './middlewares';
import routes from './routes';
import RabbitMq from './services/rabbitmq';

const main = async () => {
  const app = express();
  app.use(express.json());
  await RabbitMq.connect();
  setupMiddlewares(app);

  app.get('/health-check', (_req, res) => res.json('application is up and running'));
  app.use('/api', routes);
  const PORT = +(process.env.PORT as string) || 4000;
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port`);
  });
}

main();
