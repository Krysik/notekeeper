import express from 'express';
import setupMiddlewares from './middlewares';

const app = express();

setupMiddlewares(app);

app.get('/health-check', (_req, res) => res.json('application is running'));

const PORT = +(process.env.PORT as string) || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port`);
});

export default server;
