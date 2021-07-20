import dotenv from 'dotenv';

dotenv.config();
import { connectDb } from './services/database';
import RabbitMq from './services/rabbitmq';
import rabbitMqHandlers from './services/rabbitmq-handlers';

const main = async () => {
  await connectDb();
  await RabbitMq.connect();
  rabbitMqHandlers();
};

main();
